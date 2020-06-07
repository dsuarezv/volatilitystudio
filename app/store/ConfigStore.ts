import Store from "./Store";

class ConfigStore {
    _parent: Store;

    constructor(parent: Store) {
        this._parent = parent;
    }
}

export default ConfigStore;