import { transformPost } from '../transformers/transform-post';

export const getPosts = (page, limit) =>
    fetch(`http://localhost:3030/posts?_page=${page}&_limit=${limit}`)
        .then((loadedPosts) =>
            Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')])
        )
        .then(([loadedPosts, links]) => ({
            posts: loadedPosts && loadedPosts.map(transformPost),
            links,
        }));
