import { setPostData } from './set-post-data';

export const savePostAsync = (requestServer, updatedPost) => (dispatch) => {
    return requestServer('savePost', updatedPost).then((result) => {
        dispatch(setPostData(result.res));
        return result;
    });
};
