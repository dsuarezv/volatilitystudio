import React from 'react';
import ProcessesStore from './ProcessesStore';
import ProjectStore from './ProjectStore';
import ConfigStore from './ConfigStore';

class Store {
    Config = new ConfigStore(this);
    Project = new ProjectStore(this);
    Processes = new ProcessesStore(this);
}

const storeContext = React.createContext(new Store());

export const useStore = (): Store => {
    const store = React.useContext(storeContext);
    if (!store) throw new Error('Store context not initialized');

    return store;
}

export default Store;