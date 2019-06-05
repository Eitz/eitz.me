import express from 'express';

import BlogModel from '../models/BlogModel.mjs';
import PostModel from '../models/PostModel.mjs';

export default class PostController {

    constructor(app) {
        this.app = app;
    }

    setupRoutes() {
        const router = express.Router();
        router.get('/blog/p/:post_path', this.viewPost.bind(this));
        return router;
    }

    async postNotFound(req, res, next) {
        return res.status(404).json({
            data: {
                post: null,
                blog: BlogModel.getBasicData()
            }
        });
    }

    async viewPost(req, res, next) {
        let post = new PostModel(`posts/${req.params.post_path}.md`);
        
        if (! await post.exists())
            return this.postNotFound(req, res, next);
        
        return res.json({
            data: {
                post: {
                    text: await post.getText(),
                    metadata: await post.getMetaData()
                },
                blog: BlogModel.getBasicData()
            }
        });
    }
}