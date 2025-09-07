import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PostContent } from './components/post-content/post-content';
import { Comments } from './components/comments/comments';
import { useServerRequest } from '../../hooks/use-server-request';
import { loadPostAsync } from '../../action/load-post-async';
import { selectPost } from '../../selectors/select-post';

const PostContainer = ({ className }) => {
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();
    const post = useSelector(selectPost);

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id));
    }, [requestServer, params.id, dispatch]);

    return (
        <div className={className}>
            <PostContent post={post} />
            <Comments comments={post.comments} postId={post.id} />
        </div>
    );
};

export const Post = styled(PostContainer)`
    margin: 40px 0;
    padding: 0 80px;
    font-size: 18px;
`;
