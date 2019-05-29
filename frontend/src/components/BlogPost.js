import React from 'react';
import ReactMarkdown from  'react-markdown';

export default class BlogPost extends React.Component {
    render() {
        return <ReactMarkdown source={this.props.postText} />
    }
}