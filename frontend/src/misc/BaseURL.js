const baseUrl = process.env && process.env.NODE_ENV === 'development'
    ? 'http://localhost:80'
    : '';
export default baseUrl;