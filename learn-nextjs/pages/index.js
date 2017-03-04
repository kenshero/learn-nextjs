// index.js
import React, { Component } from 'react'

import Navbar from '../components/Nav'
import Header from '../components/Header'
import Link from 'next/link'

import client from '../graphdocuments/apolloconf'
import { getPostsQuery } from '../graphdocuments/posts'
import 'isomorphic-fetch'

export default class extends Component {
    static async getInitialProps (req) {
      let paging ;
      const limit = 5
      if (req.query.page){
        paging = {
          offset : limit * (req.query.page - 1) ,
          limit,
          activePage: req.query.page
        }
      } else {
        paging = {
          offset : 0,
          limit,
          activePage: 1
        }
      }
      const gqlResult = await client.query(getPostsQuery(paging))
      const {errors, data} = gqlResult
      const posts = data.posts.postData
      const pageInfo = data.posts.postPageInfo

      return {
        posts,
        pageInfo
      }
    }
    render () {
        const { pageInfo } = this.props
        let pagination = [];
        for (let i = 0; i < pageInfo.pageRange; i++) {
          pagination.push(
            <li key={i}>
              <Link href={`/?page=${i+1}`}>
                <a className={`pagination-link ${pageInfo.activePage == i + 1 ? 'is-current' : ''} `}> 
                  { i + 1 }
                </a>
              </Link>
            </li>
          );
        }
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
                {this.props.posts.map( (post, index) => {
                  return (
                    <div className="column is-one-quarter" key={index}>
                      <div className="card" style={{'border': '1px #ddd solid'}}>
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image" />
                          </figure>
                        </div>
                        <div className="card-content" style={{ 'height': '160px' }}>
                          <div className="content">
                            <Link href={`/post?id=${post._id}`}>
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
                <div>
                  <nav className="pagination">
                    <ul className="pagination-list">
                      {pagination}
                    </ul>
                  </nav>
                </div>
            </div> 
          </div>
        );
    }
}