import styled from '@emotion/styled';

export const LayoutContainer = styled.section`
    max-width: 42rem;
    min-height: 20rem;
    margin: 0 auto;
    border: 0.1rem solid #6495ed;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.colors.white};

    & .active {
        font-weight: 900;
        color: #6495ed;
    }
`;

export const HeaderContainer = styled.header`
    font-size: ${props => props.theme.fontSize.base};
    margin-bottom: 2rem;
    padding: 2rem 0;

    & nav {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        & ul {
            display: flex;
            gap: 2rem;
            align-items: center;
            justify-content: space-around;
        }

        & .authUtil {
            min-height: 4rem;
        }

        & .routePath {
            min-height: 4rem;
        }
    }
`;
