import styled from 'styled-components';
import { Icon } from '../../../../components/icon/icon';

const PublishedAtContainer = ({ className, publishedAt, editButton }) => {
    return (
        <div className={className}>
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
                {editButton}
                <Icon
                    id="fa-trash-o"
                    size="22px"

                    // onClick={}
                />
            </div>
        </div>
    );
};

export const PublishedAt = styled(PublishedAtContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ margin }) => margin};

    & .published-at {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
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
