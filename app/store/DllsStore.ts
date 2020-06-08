import Store from './Store';
import ExecutionStore from './ExecutionStore';
import { decorate, observable } from 'mobx';


class DllsStore extends ExecutionStore {
    
    constructor(parent: Store) {
        super(parent);
    }

    async dlllist(): Promise<void> {
        const result = await this.execute([ 'windows.dlllist' ]);
        if (result) this.all = result.json;
    }
}

export default DllsStore;