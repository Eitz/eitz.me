export default class PostUtil {
    
    static extractMetaData(postRawText) {
        return {
            title: PostUtil.extractTitle(postRawText),
            date: PostUtil.extractDate(postRawText),
            author: PostUtil.extractAuthor(postRawText),
        };
    }

    static extractTitle(postRawText) {
        return extractWithRegex(postRawText, new RegExp(/^#\s+(.+)/, 'm'));
    }

    static extractDate(postRawText) {
        return extractWithRegex(postRawText, new RegExp(/^###\s+Date:\s+(.+)/, 'm'));
    }

    static extractAuthor(postRawText) {
        return extractWithRegex(postRawText, new RegExp(/^###\s+Author:\s(.+)/, 'm'));
    }
}

function extractWithRegex(rawText, regex) {
    let match = regex.exec(rawText);
    return match && match[1] ? match[1] : '';
}