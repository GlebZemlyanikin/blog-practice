import styled from 'styled-components';
import { H2 } from '../../../../components/h2/h2';
import { Icon } from '../../../../components/icon/icon';

const PostContentContainer = ({
    className,
    post: {
        // id,
        title,
        content,
        imageUrl,
        publishedAt,
    },
}) => {
    return (
        <div className={className}>
            {imageUrl ? <img src={imageUrl} alt={title} /> : null}
            <H2>{title}</H2>
            <div className="published-at">
                <div className="published-at-date">
                    <Icon
                        id="fa-calendar-o"
                        margin="0 10px 0 0"
                        size="18px"

                        // onClick={}
                    />
                    {publishedAt}
                </div>
                <div className="published-at-actions">
                    <Icon
                        id="fa-pencil-square-o"
                        margin="0 10px 0 0 "
                        size="22px"

                        // onClick={}
                    />
                    <Icon
                        id="fa-trash-o"
                        size="22px"

                        // onClick={}
                    />
                </div>
            </div>
            <div className="content">{content}</div>
        </div>
    );
};

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        width: 300px;
        height: 200px;
        margin: 0 20px 20px 0;
    }

    & .published-at {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: -20px 0 20px;
        font-size: 18px;
    }

    & .published-at-date {
        display: flex;
        align-items: center;
    }

    & .published-at-actions {
        display: flex;
        align-items: center;
    }
`;
