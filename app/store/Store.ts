import React from 'react';
import ProcessStore from './ProcessStore';
import ProjectStore from './ProjectStore';
import ConfigStore from './ConfigStore';

class Store {
    Config = new ConfigStore(this);
    Project = new ProjectStore(this);
    Processes = new ProcessStore(this);
}

const storeContext = React.createContext(new Store());

export const useStore = (): Store => {
    const store = React.useContext(storeContext);
    if (!store) throw new Error('Store context not initialized');

    return store;
}

export default Store;