import fs from 'fs';
import { promisify } from 'util';

const readDirectory = promisify(fs.readdir);

import PostModel from './PostModel.mjs';

class BlogModel {
    
    constructor(title, author, posts_path) {
        this.title = title;
        this.author = author;
        this.posts_path = posts_path;
    }

    async getListOfPosts() {
        let postsPath = await this.findBlogPostsPath();
        return await Promise.all(
            postsPath.map(postPath => new PostModel(postPath).getMetaData())
        );
    }

    getBasicData() {
        return {
            title: this.title,
            author: this.author
        };
    }

    async findBlogPostsPath() {
        return (await readDirectory(this.posts_path)).map(postName => `${this.posts_path}/${postName}`);
    }
}

export default new BlogModel('As a developer', 'Richard Eitz', 'posts');