import './index.css';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, changeText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeText={changeText}/>
        </React.StrictMode>
    );
};

renderEntireTree(state);
subscribe(renderEntireTree);