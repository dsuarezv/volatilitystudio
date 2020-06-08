import Store from "./Store";
import { decorate, observable } from "mobx";
import ExecutionStore from "./ExecutionStore";

class ProjectStore extends ExecutionStore {

    settings = {
        image: process.env.MEMORYIMAGE
    }

    constructor(parent: Store) {
        super(parent);
    }

    async imageInfo(): Promise<void> {
        const result = await this.execute([ 'windows.info' ]);
        if (result) this.all = result.json;
    }
}

decorate(ProjectStore, {
    settings: observable
})

export default ProjectStore;