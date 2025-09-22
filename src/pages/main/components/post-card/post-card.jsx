import styled from 'styled-components';
import { Icon } from '../../../../components/icon/icon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostCardContainer = ({
    className,
    id,
    title,
    imageUrl,
    publishedAt,
    commentsCount,
}) => {
    return (
        <div className={className}>
            <Link to={`/post/${id}`}>
                <img src={imageUrl} alt={title} />
                <div className="post-card-footer">
                    <h4>{title}</h4>
                    <div className="post-card-footer-info">
                        <div className="published-at">
                            <Icon
                                inactive={true}
                                id="fa-calendar-o"
                                size="18px"
                                margin="0 10px 0 0"
                            />
                            <p>{publishedAt}</p>
                        </div>
                        <div className="comments-count">
                            <Icon
                                inactive={true}
                                id="fa-comment-o"
                                size="18px"
                                margin="0 10px 0 0"
                            />
                            <p>{commentsCount}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export const PostCard = styled(PostCardContainer)`
    display: flex;
    flex-direction: column;
    width: 280px;
    margin: 20px;
    border: 1px solid #000;

    & img {
        display: block;
        width: 100%;
        height: 240px;
        object-fit: cover;
    }

    & .post-card-footer {
        border-top: 1px solid #000;
    }

    & h4 {
        padding: 10px;
        font-size: 18px;
    }

    & .post-card-footer-info {
        display: flex;
        padding: 10px;
        justify-content: space-between;
    }

    & .published-at {
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    & .comments-count {
        display: flex;
        align-items: center;
        font-size: 18px;
    }
`;

PostCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    commentsCount: PropTypes.number.isRequired,
};
