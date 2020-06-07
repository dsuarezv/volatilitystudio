import Store from "./Store";
import { decorate, observable } from "mobx";

class ProjectStore {

    _parent: Store;

    settings = {
        image: process.env.MEMORYIMAGE
    }

    constructor(parent: Store) {
        this._parent = parent;
    }
}

decorate(ProjectStore, {
    settings: observable
})

export default ProjectStore;