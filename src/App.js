import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import "./App.css";
import Search from './search.jsx'

import Home from "./Home.js"
import Header from "./Header.jsx"
import Show from "./Show.jsx";
import { paint } from "./Paint.js";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paints: paint,
      filtred: paint
    }
  }

  setPaint(paint) {
    this.setState({
      paints: paint
    })
  }

  search = (term) => {
    this.setState({
      filtred: this.state.paints.filter(product => product.name.toLowerCase().includes
        (term.toLowerCase()))
    })
  }
  
  render() {
    return (
      <div>
          <div>
          <Link to="/" exact>
          <Header />
        </Link>
          </div>
        <Route path="/" exact>
        <main className="body">
          <div className="photos">
          <Search setSearch={this.search} />
              {this.state.filtred.map(paints =>
                <Link to={`/Show/${paints.name}`}><div className="photoPaint" key={paints}> 
                <Home
                    setPaint={paints.imgURL}
                    setPainters={paints.name}
                    setPaintPrice={paints.price}
                />
            </div></Link>)} 
          </div>
          </main>
        </Route >
        <Route path="/Show/:Painttime">
        <Show />
        </Route>
      </div>
    )
  }
}

export default App;