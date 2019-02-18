import React, { Component } from 'react';

import { AppProvider, Badge, Link, Tooltip } from '@shopify/polaris'

import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {

    return (

      <AppProvider>
        <div className="App">
          <header className="App-header">

            <Tooltip content="explantion">
              <Link>Some confusing text</Link>
            </Tooltip>

            <p>
              Jack Koppa <Badge status="success"> A Status</Badge>
            </p>




            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Testing a create-react-app w/ TypeScript
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </AppProvider>
    );
  }
}

export default App;
