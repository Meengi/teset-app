import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import State, {AddComment, UpTextArea,Subscraber} from './State'

const root = ReactDOM.createRoot(document.getElementById('root'));

export let RenderAllTree = (State) => {

    root.render(
        <React.StrictMode>
            <App state={State}
                 AddComment={AddComment}
                 UpTextArea={UpTextArea}
            />
        </React.StrictMode>
    );
}

RenderAllTree(State);

Subscraber(RenderAllTree);

reportWebVitals();