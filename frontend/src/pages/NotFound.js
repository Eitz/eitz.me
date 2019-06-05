import React from 'react';

import BaseURL from '../misc/BaseURL';
import './NotFound.css';

class NotFound extends React.Component {

  state = {
    blog: null
  }  

  fetchNotFoundData() {
    return fetch(`${BaseURL}/api/blog`, { accept: 'application/json' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          ...data.data
        })
      });
  }

  render() {
    
    if (this.state.blog === null) {
      this.fetchNotFoundData();
      return <p>Loading...</p>
    }

    return (
      <div className="NotFound">
        <h1>Blog: {this.state.blog.title}</h1>
        <h2 className="Author">Author: {this.state.blog.author}</h2>
        {
            this.state.blog.last_updated
          ? <h3 className="LastUpdated">Last updated: {this.state.blog.lastUpdated}</h3>
          : null
        }
        <hr />
        <ul>
          Page not found.
        </ul>
      </div>
    );
  }
}

export default NotFound;