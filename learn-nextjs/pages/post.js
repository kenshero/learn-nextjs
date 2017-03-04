// post.js
import React, { Component } from 'react'

import Navbar from '../components/Nav'
import Header from '../components/Header'

export default class PostPage extends Component {
    static async getInitialProps (req) {
      console.log(req.query)
    }
    render () {
        return (
          <div>
            <Header/>
            <Navbar/>
            <div className="container">
              <div>
                <figure className="image">
                  <img src="http://bulma.io/images/placeholders/1280x960.png"
                    width="100%"  style={{'height': '500px','marginTop': '30px'}} />
                </figure>
              </div>
              <hr/>
              <div>
                <div className="content">
                  <h1>Hello World</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus 
                    ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu 
                    lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, 
                    interdum mattis neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}