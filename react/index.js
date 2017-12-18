import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <h1>hello, React!</h1>
)

const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv);