//Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () =>  {
    return <div>Hello world!</div>;
};

// Take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector('#root'));