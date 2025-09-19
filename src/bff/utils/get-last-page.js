export const getLastPage = (links) => {
    const result = links.match(/_page=(\d{1,4})&_limit=\d{1,4}>; rel="last"/);
    return Number(result && result[1]);
};
