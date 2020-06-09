import { decorate, observable } from 'mobx';
import Store from './Store';
import ExecutionStore, { ExecutionResult } from './ExecutionStore';


class ProcessStore extends ExecutionStore {
    
    loading = false;
    all?: any[];
    current?: object;
    error?: object;


    constructor(parent: Store) {
        super(parent);
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

    async pslist(): Promise<void> {
        const result = await this.execute([ 'windows.pslist' ]);
        if (result) this.all = result.json;
    }

    async psscan(): Promise<void> {
        const result = await this.execute([ 'windows.psscan' ]);
        console.log(result);
        
        if (result) this.all = result.json;
    }
}

decorate(ProcessStore, {
    loading: observable,
    all: observable,
    current: observable,
    error: observable
});

export default ProcessStore;