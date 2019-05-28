import express from 'express';

import PostModel from '../models/PostModel.mjs';

export default class PostController {

    constructor(app) {
        this.app = app;
    }

    setupRoutes() {
        const router = express.Router();
        router.get('/p/:post_path', this.viewPost.bind(this));
        return router;
    }

    async postNotFound(req, res, next) {
        return res.status(404).send('404');
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
                }
            }
        });
    }
}