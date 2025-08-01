import styled from 'styled-components';

const IconConteiner = ({ className, id }) => (
    <div className={className}>
        <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
);

export const Icon = styled(IconConteiner)`
    font-size: ${({ size = '24px' }) => size};
    margin: ${({ margin = '0' }) => margin};
`;
