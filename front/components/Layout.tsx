import Header from './Header';
import styled from '@emotion/styled';
import { LayoutChildrenProps } from 'types/PropsType';

const LayoutContainer = styled.section`
    max-width: 42rem;
    min-height: 20rem;
    margin: 0 auto;
    border: 0.1rem solid ${props => props.theme.colors.themeColor};
    border-radius: 0.4rem;
    background-color: ${props => props.theme.colors.white};

    & .active {
        font-weight: 900;
        color: #6495ed;
    }
`;

export default function Layout({ children }: LayoutChildrenProps) {
    return (
        <LayoutContainer>
            <Header />
            {children}
        </LayoutContainer>
    );
}
