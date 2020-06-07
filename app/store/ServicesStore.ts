import Store from './Store';
import ExecutionStore from './ExecutionStore';


class ServicesStore extends ExecutionStore {
    
    constructor(parent: Store) {
        super(parent);
    }

    async pslist(): Promise<void> {
        const result = await this.execute([ 'windows.svcscan' ]);
        if (result) this.all = result.json;
    }
}


export default ServicesStore;