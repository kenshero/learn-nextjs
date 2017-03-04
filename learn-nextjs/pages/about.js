// about.js
import React, { Component } from 'react'

import Navbar from '../components/Nav'
import Header from '../components/Header'

export default class Homepage extends Component {
    render () {
        return (
          <div>
            <Header/>
            <Navbar/>
            <div className="columns" style={{'padding': '36px'}}>
              <div className="column is-narrow">
                <div className="box" style={{'width': '200px'}}>
                  <figure class="image is-256x256">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" />
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <h1 className="title">Title</h1>
                  <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Maecenas facilisis eget eros consectetur rutrum. Curabitur luctus mauris nisi, eu laoreet velit accumsan ac. 
                    Morbi vitae tortor enim. Integer blandit eros quam, in facilisis tortor pulvinar ut. 
                    Nam sit amet velit a sapien vestibulum egestas. Mauris venenatis eros sed neque venenatis, quis pharetra augue dictum.
                    Aliquam vitae elementum erat, eget convallis nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                    Phasellus gravida sodales sollicitudin. Nunc vel velit a enim blandit venenatis id vitae tortor. 
                    Nunc rhoncus aliquet augue. Ut accumsan, sapien vel scelerisque posuere, sapien eros tincidunt massa, et consequat lorem mi vel tellus. 
                    Vestibulum augue diam, cursus vel risus a, rutrum tincidunt mi. Vivamus velit neque, tincidunt non enim sed, pretium condimentum dolor.
                    Sed elementum est sapien, ut pulvinar nulla eleifend in. Vivamus ut lacinia leo, eu semper urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}