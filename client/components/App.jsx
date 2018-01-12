/*
    ./client/components/App.jsx
*/
import React from 'react';
import Welcome from '../components/Welcome';
import HelloWorldContainer from '../containers/HelloWorldContainer';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <Welcome name="World"  />
        <h2>Og er er Containeren min:</h2>
        <HelloWorldContainer name="Eivind"/>
      </div>);
  }
}

