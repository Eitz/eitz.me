export default class PostUtil {
    
    static extractMetaData(postRawText) {
        return {
            title: PostUtil.extractTitle(postRawText),
            date: PostUtil.extractDate(postRawText),
            author: PostUtil.extractAuthor(postRawText),
        };
    }

    static extractTitle(postRawText) {
        let regex = new RegExp(/^#\s+(.+)/, 'm');
        let match = regex.exec(postRawText);
        return match && match[1] ? match[1] : '';
    }

    static extractDate(postRawText) {
        let regex = new RegExp(/^###\s+Date:\s+(.+)/, 'm');
        let match = regex.exec(postRawText);
        return match && match[1] ? match[1] : '';
    }

    static extractAuthor(postRawText) {
        let regex = new RegExp(/^###\s+Author:\s(.+)/, 'm');
        let match = regex.exec(postRawText);
        return match && match[1] ? match[1] : '';
    }
}