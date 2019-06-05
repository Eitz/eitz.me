import express from 'express';

import BlogModel from '../models/BlogModel';

export default class BlogController {

    constructor(app) {
        this.app = app;
    }

    setupRoutes() {
        const router = express.Router();
        router.get('/blog/', this.home.bind(this));
        return router;
    }

    async home(req, res, next) {

        let listOfPosts = await BlogModel.getListOfPosts();

        return res.json({
            data: {
                blog: {
                    posts: listOfPosts,
                    ...BlogModel.getBasicData()
                }                
            }
        })
    }
}