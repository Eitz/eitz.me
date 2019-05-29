import React from 'react';
import { Link } from 'react-router-dom';

import BaseURL from '../misc/BaseURL';
import BlogPost from '../components/BlogPost';

import './BlogPost.css';

class BlogPostPage extends React.Component {
    
    state = {
        blog: null,
        post: null
    }  
    
    fetchPostData(postSlug) {
        return fetch(`${BaseURL}/api/blog/p/${postSlug}`, { accept: 'application/json' })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    ...data.data
                });
            });
    }

    renderPost(postText) {
        return <BlogPost postText={postText} />;
    }

    render() {
        if (this.state.post === null) {
            this.fetchPostData(this.props.match.params.postSlug);
            return <p>Loading...</p>
        }
            
        return (
            <div className="BlogHome">
            <h1>Blog: <Link to='/'>{this.state.blog.title}</Link></h1>
            <h2 className="Author">Author: {this.state.blog.author}</h2>
            {
                this.state.blog.last_updated
                ? <h3 className="LastUpdated">Last updated: {this.state.blog.lastUpdated}</h3>
                : null
            }
            <hr />
            {this.renderPost(this.state.post.text)}
            </div>
        );
    }
}

export default BlogPostPage;