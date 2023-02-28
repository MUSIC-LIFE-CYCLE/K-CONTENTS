import styled from '@emotion/styled';

export const LayoutContainer = styled.section`
    max-width: 420px;
    min-height: 200px;
    margin: 0 auto;
`;

export const HeaderContainer = styled.header`
    font-size: 1.4rem;
    background-color: ${props => props.theme.colors.coral};
    padding-top: 2rem;

    & nav {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        & ul {
            display: flex;
            gap: 2rem;
            justify-content: space-around;
        }

        & .authUtil {
        }

        & .routePath {
        }
    }
`;
