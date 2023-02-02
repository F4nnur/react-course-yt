import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Olya'},
];

let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'kek'},
    {id: 3, message: 'lol'},
]

let postData = [
    {id: 1, data: 'Hi'},
    {id: 2, data: 'Hello'},
    {id: 3, data: 'Cool'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
