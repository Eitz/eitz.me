import express from 'express';

import BlogModel from '../models/BlogModel';

export default class BlogController {

    constructor(app) {
        this.app = app;
        this.blog = new BlogModel('As a developer', 'Richard Eitz', 'posts');
    }

    setupRoutes() {
        const router = express.Router();
        router.get('/blog/', this.home.bind(this));
        return router;
    }

    async home(req, res, next) {

        let listOfPosts = await this.blog.getListOfPosts();

        return res.json({
            data: {
                blog: {
                    posts: listOfPosts,
                    title: this.blog.title,
                    author: this.blog.author,
                }                
            }
        })
    }
}