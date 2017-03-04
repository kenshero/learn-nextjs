// post.js
import React, { Component } from 'react'

import Navbar from '../components/Nav'
import Header from '../components/Header'
import Link from 'next/link'

import client from '../graphdocuments/apolloconf'
import { getPostByIDQuery } from '../graphdocuments/posts'
import 'isomorphic-fetch'

export default class PostPage extends Component {
    static async getInitialProps (req) {
      if(req.query.id) {
        const variables = {
          postID: req.query.id
        }
        const gqlResult = await client.query(getPostByIDQuery(variables))
        const {errors, data} = gqlResult
        const post = data.post
        return {
          post
        }
      }
    }
    render () {
      const { post } = this.props
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
                  <h1>{ post.title }</h1>
                  <p>
                    { post.content }
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}