import Store from './Store';
import { observable, decorate } from 'mobx';

// Get this from the config store
const studioConfig = {
    python: {
        path: process.env.PYTHONPATH
    },
    volatility: {
        path: process.env.VOLATILITYPATH
    }
}

const PATH_ADDITIONS_WINDOWS = [
    "",
    "Library\\mingw-w64\\bin",
    "Library\\usr\\bin",
    "Library\\bin",
    "Scripts",
    "bin"
];

const SEP = '\\';   // Later on, platform dependant
const PATH_SEP = ';';


export interface ExecutionResult {
    stdout?: string;
    stderr?: string;
    json?: object;
    error?: object;
}


class ExecutionStore {

    _parent: Store;

    loading = false;
    all?: object;
    error?: object;

    constructor(parent: Store) {
        this._parent = parent;
    }

    async execute(args: string[]): Promise<ExecutionResult | null> {
        this.loading = true;
        this.error = undefined;

        const result = await this.executeVolatility(args);
        if (!result.json) {
            this.error = result.error;
            this.loading = false;
            return null;
        }
        
        this.all = result.json;
        this.loading = false;

        return result;
    }

    async executeVolatility(args: string[]): Promise<ExecutionResult> {
        
        const image = this._parent.Project.settings.image;
        if (!image) throw new Error("Project memory image is not set");

        const lCmd = studioConfig.python.path + SEP + "python.exe";
        const lArgs = [
            studioConfig.volatility.path + SEP + "vol.py", 
            '--renderer=json',
            '-f', 
            image,
            ...args
        ];
    
        var process = require('process');
    
        let result: ExecutionResult;

        try {
            result = await this.executeAsync(lCmd, lArgs, 
            { 
                cwd: studioConfig.volatility.path,
                env: { 
                    PATH: this._getEnvPaths(studioConfig.python.path) + process.env.path
                }
            });
        
            if (result && result.stdout) {
                result.json = JSON.parse(result.stdout);
            }
        }
        catch (errResult) {
            result = errResult;
        }
    
        return result;
    }

    async executeAsync(cmd: string, args: string[], options?: object): Promise<ExecutionResult> {

        return new Promise((resolve, reject) => {
            
            var child = require('child_process').execFile;
            child(cmd, args, options, (err: object, stdout: string, stderr: string) => {
                
                var result: ExecutionResult = { stdout, stderr };
                
                if (err) {
                    result.error = err;
                    reject(result);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    _getEnvPaths(basePath: string) {
        return PATH_ADDITIONS_WINDOWS.map(p => basePath + SEP + p).join(PATH_SEP) + PATH_SEP;
    }
}

decorate(ExecutionStore, {
    loading: observable,
    all: observable,
    error: observable
});


export default ExecutionStore;