import Store from './Store';
import ExecutionStore from './ExecutionStore';


class VadsStore extends ExecutionStore {
    
    constructor(parent: Store) {
        super(parent);
    }

    async vadinfo(): Promise<void> {
        const result = await this.execute([ 'windows.vadinfo' ]);
        if (result) this.all = result.json;
    }
}

export default VadsStore;