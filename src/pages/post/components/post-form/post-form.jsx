import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Input } from '../../../../components/input/input';
import { PublishedAt } from '../published-at/published-at';
import { Icon } from '../../../../components/icon/icon';
import { useRef } from 'react';
import { savePostAsync } from '../../../../action/save-post-async';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks/use-server-request';

const PostFormContainer = ({
    className,
    post: { title, content, imageUrl, publishedAt, id },
}) => {
    const imageUrlRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const requestServer = useServerRequest();

    const onSave = () => {
        const imageUrl = imageUrlRef.current.value;
        const title = titleRef.current.value;
        const content = contentRef.current.innerText;

        dispatch(
            savePostAsync(requestServer, {
                imageUrl: imageUrl,
                title: title,
                content: content,
                id: id,
                // publishedAt: publishedAt,
            })
        ).then(() => {
            navigate(`/post/${id}`);
        });
    };

    return (
        <div className={className}>
            <Input
                ref={imageUrlRef}
                defaultValue={imageUrl}
                placeholder="Изображение"
            />
            <Input
                ref={titleRef}
                defaultValue={title}
                placeholder="Заголовок"
            />
            <PublishedAt
                publishedAt={publishedAt}
                margin="20px 0"
                editButton={
                    <Icon
                        id="fa-floppy-o"
                        margin="0 10px 0 0 "
                        size="22px"
                        onClick={onSave}
                    />
                }
            />

            <div
                ref={contentRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
                className="content"
            >
                {content}
            </div>
        </div>
    );
};

export const PostForm = styled(PostFormContainer)`
    & img {
        float: left;
        width: 300px;
        height: 200px;
        margin: 0 20px 20px 0;
    }
    & .content {
        white-space: pre-wrap;
    }
`;
