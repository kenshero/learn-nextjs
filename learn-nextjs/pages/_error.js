// error.js
import React, { Component } from 'react'
import Header from '../components/Header'

export default class Error extends Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render () {
    return (
      <div className="message is-info">
        <Header/>
        <div className="message-header">
          <p>Error</p>
        </div>
        <div className="message-body">
          <p>{
            this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'
          }</p>
        </div>
      </div>
    )
  }
}