import styled from 'styled-components';
import { Icon } from '../../../../components/icon/icon';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../../hooks/use-server-request';
import { openModal } from '../../../../action/open-modal';
import { CLOSE_MODAL } from '../../../../action/close-modal';
import { removePostAsync } from '../../../../action/remove-post-async';
import { useNavigate } from 'react-router-dom';

const PublishedAtContainer = ({ className, publishedAt, editButton, id }) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const navigate = useNavigate();
    const onPostDelete = (id) => {
        dispatch(
            openModal({
                text: 'Удалить пост?',
                onConfirm: () => {
                    dispatch(CLOSE_MODAL());
                    dispatch(removePostAsync(requestServer, id)).then(() => {
                        navigate(`/`);
                    });
                },

                onCancel: () => dispatch(CLOSE_MODAL()),
            })
        );
    };
    return (
        <div className={className}>
            <div className="published-at-date">
                {publishedAt && (
                    <Icon
                        inactive={true}
                        margin="0 10px 0 0"
                        id="fa-calendar-o"
                        size="18px"
                    />
                )}
                {publishedAt}
            </div>
            <div className="published-at-actions">
                {editButton}
                {publishedAt && (
                    <Icon
                        id="fa-trash-o"
                        size="22px"
                        margin="0 0 2px 0"
                        onClick={() => onPostDelete(id)}
                    />
                )}
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
