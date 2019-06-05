import fs from 'fs';
import { promisify } from 'util';

import PostUtil from './../utils/PostUtil';

const readFile = promisify(fs.readFile);

export default class PostModel {
    
    constructor(postPath) {
        this.postPath = postPath.replace('\.\.', '--');
    }

    async loadPost() {
        if (!this.hasOwnProperty('rawText')) {
            try {
                this.rawText = await readFile(this.postPath, { encoding: 'utf8' });
            } catch (e) {
                this.rawText = null;
            }
        }
    }

    async exists() {
        await this.loadPost();
        return !!this.rawText;
    }

    async getText() {
        await this.loadPost();
        return this.rawText;
    }

    async getMetaData() {
        await this.loadPost();
        return {
            ...PostUtil.extractMetaData(this.rawText),
            url: this.postPath.replace('posts/', '/p/').replace('.md', '')
        };
    }
}