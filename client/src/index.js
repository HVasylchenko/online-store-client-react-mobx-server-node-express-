import React, { createContext } from 'react';

import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';

import App from './App';
import DeviseStore from './store/DeviceStore';

export const Context = createContext(null); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ user: new UserStore(), device: new DeviseStore() }}>
    <App />
  </Context.Provider>
);

// npm i axios react-router-dom mobx mobx-react-lite
