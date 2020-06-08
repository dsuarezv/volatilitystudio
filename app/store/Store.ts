import React from 'react';
import ProcessesStore from './ProcessesStore';
import ProjectStore from './ProjectStore';
import ConfigStore from './ConfigStore';
import ServicesStore from './ServicesStore';
import MalfindStore from './MalfindStore';

class Store {
    Config = new ConfigStore(this);
    Project = new ProjectStore(this);
    Processes = new ProcessesStore(this);
    Services = new ServicesStore(this);
    Malfind = new MalfindStore(this);
}

const storeContext = React.createContext(new Store());

export const useStore = (): Store => {
    const store = React.useContext(storeContext);
    if (!store) throw new Error('Store context not initialized');

    return store;
}

export default Store;