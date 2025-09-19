import { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { PostContent } from './components/post-content/post-content';
import { Comments } from './components/comments/comments';
import { useServerRequest } from '../../hooks/use-server-request';
import { loadPostAsync } from '../../action/load-post-async';
import { selectPost } from '../../selectors/select-post';
import { PostForm } from './components/post-form/post-form';
import { RESET_POST_DATA } from '../../action/reset-post-data';

const PostContainer = ({ className }) => {
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();
    const post = useSelector(selectPost);
    const isNew = useMatch('/post');
    const isEdit = useMatch('/post/:id/edit');

    useLayoutEffect(() => {
        dispatch(RESET_POST_DATA());
    }, [dispatch, isNew]);

    useEffect(() => {
        if (isNew) {
            return;
        }
        dispatch(loadPostAsync(requestServer, params.id));
    }, [requestServer, params.id, dispatch, isNew]);

    return (
        <div className={className}>
            {isNew || isEdit ? (
                <PostForm post={post} />
            ) : (
                <>
                    <PostContent post={post} />
                    <Comments comments={post.comments} postId={post.id} />
                </>
            )}
        </div>
    );
};

export const Post = styled(PostContainer)`
    margin: 40px 0;
    padding: 0 80px;
    font-size: 18px;
`;
