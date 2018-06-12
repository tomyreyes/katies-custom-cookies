import React, { Component } from 'react'
import { About, CarouselContainer, Footer, Insta, Nav } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
    <CarouselContainer />
        <About />
        <Insta />
        <Footer />
      </div>
    )
  }
}

export default App
