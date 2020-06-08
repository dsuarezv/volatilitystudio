import Store from './Store';
import ExecutionStore from './ExecutionStore';


class MalfindStore extends ExecutionStore {
    
    constructor(parent: Store) {
        super(parent);
    }

    async malfind(): Promise<void> {
        const result = await this.execute([ 'windows.malfind' ]);
        if (result) this.all = result.json;
    }
}


export default MalfindStore;