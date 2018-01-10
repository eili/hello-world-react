/*
    ./client/components/App.jsx
*/
import React from 'react';
import HelloWorldContainer from '../containers/HelloWorldContainer';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <h2>Og er er Containeren min:</h2>
        <HelloWorldContainer name="Eivind"/>
      </div>);
  }
}

