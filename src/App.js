import React, { Component } from 'react';
import { About, Carousel, Footer, Insta, Nav } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Carousel/>
        <About/>
        <Insta/>
        <Footer/>
        </div>
    );
  }
}

export default App;
