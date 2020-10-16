import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Root from "./pages/Root/Root";

function App() {
    return (
        <BrowserRouter basename={`${process.env.REACT_APP_BASENAME}`}>
            <Root/>
        </BrowserRouter>
    );
}

export default App;
