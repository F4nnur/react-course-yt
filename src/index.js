import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} changeText={store.changeText.bind(store)}/>
        </React.StrictMode>
    );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);