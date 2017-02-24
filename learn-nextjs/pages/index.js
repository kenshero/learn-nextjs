// index.js
import React, { Component } from 'react'

import Navbar from '../components/Nav'
import Header from '../components/Header'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends Component {
    static async getInitialProps () {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      return {
        posts
      }
    }
    render () {
        return (
          <div>
            <Header/>
            <Navbar/>
            <div className="columns">
              <div className="column">
                <figure className="image">
                  <img src="https://image.shutterstock.com/z/stock-vector-white-welcome-sign-over-confetti-background-vector-holiday-illustration-302906972.jpg"
                    width="100%"  style={{'height': '500px'}} />
                </figure>
              </div>
            </div>
            <div className="container">
                <div className="columns">
                  <div className="column is-half is-offset-one-quarter">
                    <center>
                      <h1 className="title"> News </h1>
                    </center>
                  </div>
                </div>
                <div className="columns is-multiline">
                {this.props.posts.map( (post) => {
                  return (
                    <div className="column is-one-quarter" >
                      <div className="card" style={{'border': '1px #ddd solid'}}>
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image" />
                          </figure>
                        </div>
                        <div className="card-content" style={{ 'height': '160px' }}>
                          <div className="content">
                            <Link href='/new'>
                              <a className="title is-4">
                                {post.title}
                              </a>
                            </Link>
                            <br/>
                            <small>11:09 PM - 1 Jan 2016</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  })
                }
                </div>
            </div> 
          </div>
        );
    }
}