// index.js
import React, { Component } from 'react'

import Navbar from '../components/Nav'
import Header from '../components/Header'

export default class Homepage extends Component {
    render () {
        return (
          <div>
            <Header/>
            <Navbar/>
            <div className="columns">
                <div className="column">
                  <h1>About</h1>
                </div>
            </div>
          </div>
        );
    }
}