import styled from 'styled-components';
import { Icon } from '../../../../../components/icon/icon';

const CommentContainer = ({ className, id, content, author, publishedAt }) => {
    return (
        <div className={className}>
            <div className="comment">
                <div className="comment-header">
                    <div className="author">
                        <Icon
                            id="fa-user-circle-o"
                            margin="0 10px 0 0"
                            size="18px"
                        />
                        {author}
                    </div>
                    <div className="published-at">
                        <Icon
                            id="fa-calendar-o"
                            margin="0 10px 0 0"
                            size="18px"
                        />
                        {publishedAt}
                    </div>
                </div>
                <div className="comment">{content}</div>
            </div>
            <Icon id="fa-trash-o" margin="0 0 0 10px" size="18px" />
        </div>
    );
};

export const Comment = styled(CommentContainer)`
    display: flex;
    padding: 10px 0;
    border-bottom: 2px solid #eee;

    & .comment {
        width: 100%;
        padding: 0 10px;
    }

    & .comment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .author {
        display: flex;
        align-items: center;
    }

    & .published-at {
        display: flex;
        align-items: center;
    }

    & .comment {
        margin: 10px 0 0;
    }
`;
