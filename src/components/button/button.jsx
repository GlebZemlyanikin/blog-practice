import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = ({ children, className, width, ...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export const Button = styled(ButtonContainer).withConfig({
    shouldForwardProp: (prop) => prop !== 'width',
})`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    width: ${({ width = '100%' }) => width};
    height: 32px;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #eee;
    padding: 10px;

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }
`;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string,
};
