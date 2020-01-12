import React, { Component } from 'react';

import HeaderSearchBar from './Components/headerSearchBar';
import Router from './Components/router';
import Footer from './Components/footer';






class App extends Component {

  render() {
    return (
      <div>
        <div>
          <HeaderSearchBar />
        </div>
        <div>
          <Router />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
