import React from 'react';
import { Link } from 'react-router-dom';

import BaseURL from '../misc/BaseURL';
import BlogPost from '../components/BlogPost';

import './BlogPost.css';

class BlogPostPage extends React.Component {
    
    state = {
        blog: null,
        post: undefined
    }  
    
    async fetchPostData(postSlug) {
        try {
            let response = await fetch(`${BaseURL}/api/blog/p/${postSlug}`, { accept: 'application/json' })
            let data = await response.json();
            this.setState({
                ...data.data
            });
        } catch (err) {
            console.error("We had problems -->", err);
        }
    }

    renderPost(postText) {
        return <BlogPost postText={postText} />;
    }

    renderPostNotFound() {
        return <p>Post not found.</p>;
    }

    render() {
        if (this.state.post === undefined) {
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
            { 
                this.state.post
                    ? this.renderPost(this.state.post.text)
                    : this.renderPostNotFound()
            }
            </div>
        );
    }
}

export default BlogPostPage;