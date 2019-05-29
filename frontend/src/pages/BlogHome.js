import React from 'react';
import { Link } from 'react-router-dom';

import './BlogHome.css';

class BlogHome extends React.Component {

  state = {
    blog: null
  }  

  fetchBlogHomeData() {
    return fetch('http://localhost/api/blog', { accept: 'application/json' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          ...data.data
        })
      });
  }

  renderPost(post) {
    return (
      <li key={post.url}>
        {post.date} - <Link to={post.url}>{post.title}</Link>
      </li>
    )
  }

  render() {
    
    if (this.state.blog === null) {
      this.fetchBlogHomeData();
      return <p>Loading...</p>
    }
    
    return (
      <div className="BlogHome">
        <h1>Blog: {this.state.blog.title}</h1>
        <h2 className="Author">Author: {this.state.blog.author}</h2>
        {
            this.state.blog.last_updated
          ? <h3 className="LastUpdated">Last updated: {this.state.blog.lastUpdated}</h3>
          : null
        }
        <hr />
        <ul>
          {this.state.blog.posts.map(post => this.renderPost(post))}
        </ul>
      </div>
    );
  }
}

export default BlogHome;