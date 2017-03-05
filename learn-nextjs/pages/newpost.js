// newpost.js
import React, { Component } from 'react'

import Navbar from '../components/Nav'
import Header from '../components/Header'

import client from '../graphdocuments/apolloconf'
import { createPost } from '../graphdocuments/posts'

export default class Homepage extends Component {
    constructor(props) {
      super(props)
      this.state = { title: '', content: '' }

      this.handleTitleChange = this.handleTitleChange.bind(this)
      this.handleContentChange = this.handleContentChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(e) {
      let currentState = {
        title : e.target.value
      }
      this.updateState(currentState)
    }

    handleContentChange(e) {
      let currentState = {
        content : e.target.value
      }
      this.updateState(currentState)
    }

    async handleSubmit() {
      const variables = this.state
      try {
        await client.mutate(createPost(variables))
        window.location.href = '/' // bad practice
      } catch (err) {
        console.log(err)
      }
    }

    updateState(nextState) {
      this.setState(nextState)
    }

    render () {
        return (
          <div>
            <Header/>
            <Navbar/>
            <div className="container" style={{'padding': '36px'}}>
              <label className="label"> Title : </label>
              <p className="control">
                <input className="input is-focused" type="text" onChange={ this.handleTitleChange } value={ this.state.title } />
              </p>
              <label className="label"> Content : </label>
              <p className="control">
                <textarea className="textarea is-focused" onChange={ this.handleContentChange } value={ this.state.content }></textarea>
              </p>
              <p className="control">
                <a className="button is-primary" onClick={ this.handleSubmit } >Submit</a>
              </p>
            </div>
         </div>
        );
    }
}