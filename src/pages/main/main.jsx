import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks/use-server-request';
import { PostCard } from './components/post-card/post-card';
import { Pagination } from './components/pagination/pagination';
import { PAGINATION_LIMIT } from '../../constants/pagination-limit';
import { getLastPage } from '../../bff/utils/get-last-page';

const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const requestServer = useServerRequest();

    useEffect(() => {
        requestServer('fetchPosts', page, PAGINATION_LIMIT).then(
            ({ res: { posts, links } }) => {
                setPosts(posts);
                setLastPage(getLastPage(links));
            }
        );
    }, [requestServer, page]);

    return (
        <div className={className}>
            <div className="post-list">
                {posts.map(
                    ({ id, title, imageUrl, publishedAt, commentsCount }) => (
                        <PostCard
                            key={id}
                            id={id}
                            title={title}
                            imageUrl={imageUrl}
                            publishedAt={publishedAt}
                            commentsCount={commentsCount}
                        />
                    )
                )}
            </div>
            {lastPage > 1 && (
                <Pagination
                    page={page}
                    lastPage={lastPage}
                    setPage={setPage}
                    // links={links}
                />
            )}
        </div>
    );
};

export const Main = styled(MainContainer)`
    & .post-list {
        display: flex;
        flex-wrap: wrap;
        // width: 280px;
        font-size: 18px;
        padding: 20px;
    }
`;
