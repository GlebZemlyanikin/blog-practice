import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/icon';
import { Comment } from './comment/comment';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../selectors/select-user-id';
import { addCommentAsync } from '../../../../action/add-comment-async';
import { useServerRequest } from '../../../../hooks/use-server-request';
import { ROLE } from '../../../../bff/constants/role';
import { selectUserRole } from '../../../../selectors/select-user-role';

const CommentsContainer = ({ className, comments, postId }) => {
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const requestServer = useServerRequest();
    const roleId = useSelector(selectUserRole);

    const onNewCommentSubmit = (postId, userId, content) => {
        dispatch(addCommentAsync(requestServer, postId, userId, content));
        setNewComment('');
    };

    const isGuest = roleId === ROLE.GUEST;
    return (
        <div className={className}>
            {!isGuest && (
                <div className="new-comment">
                    <textarea
                        name="newComment"
                        value={newComment}
                        placeholder="Напишите комментарий"
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Icon
                        id="fa-paper-plane-o"
                        margin="0 0 0 10px"
                        size="18px"
                        onClick={() =>
                            onNewCommentSubmit(postId, userId, newComment)
                        }
                    />
                </div>
            )}
            <div className="comments">
                {comments.map(({ id, content, author, publishedAt }) => (
                    <Comment
                        key={id}
                        postId={postId}
                        id={id}
                        content={content}
                        author={author}
                        publishedAt={publishedAt}
                    />
                ))}
            </div>
        </div>
    );
};

export const Comments = styled(CommentsContainer)`
    margin: 0 auto;
    width: 580px;

    & .new-comment {
        display: flex;
        width: 100%;
        margin: 20px 0 0;
    }

    & .new-comment textarea {
        width: 100%;
        resize: none;
        height: 120px;
        font-size: 18px;
    }
`;
