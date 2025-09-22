import styled from 'styled-components';
import { useEffect, useState, useMemo } from 'react';
import { useServerRequest } from '../../hooks/use-server-request';
import { PostCard } from './components/post-card/post-card';
import { Pagination } from './components/pagination/pagination';
import { PAGINATION_LIMIT } from '../../constants/pagination-limit';
import { getLastPage } from '../../bff/utils/get-last-page';
import { Search } from './components/search/search';
import { debounce } from '../../bff/utils/debounce';

const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [search, setSearch] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const requestServer = useServerRequest();

    useEffect(() => {
        requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
            ({ res: { posts, links } }) => {
                setPosts(posts);
                setLastPage(getLastPage(links));
            }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestServer, page, search]);

    const debouncedSearch = useMemo(() => debounce(setSearch, 2000), []);

    const onSearch = ({ target }) => {
        setSearchPhrase(target.value);
        debouncedSearch(!search);
    };

    return (
        <div className={className}>
            <Search searchPhrase={searchPhrase} onChange={onSearch} />
            {posts.length ? (
                <div className="post-list">
                    {posts.map(
                        ({
                            id,
                            title,
                            imageUrl,
                            publishedAt,
                            commentsCount,
                        }) => (
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
            ) : (
                <div className="no-results">Поиск не дал результатов</div>
            )}
            {lastPage > 1 && (
                <Pagination page={page} lastPage={lastPage} setPage={setPage} />
            )}
        </div>
    );
};

export const Main = styled(MainContainer)`
    & .search {
        margin: 20px;
    }

    & .post-list {
        display: flex;
        flex-wrap: wrap;
        font-size: 18px;
        padding: 20px;
    }

    & .no-results {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        padding: 40px;
    }
`;
