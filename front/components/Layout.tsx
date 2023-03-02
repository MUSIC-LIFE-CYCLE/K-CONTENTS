import Header from './Header';
import styled from '@emotion/styled';

const LayoutContainer = styled.section`
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

interface LayoutChildrenProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutChildrenProps) {
    return (
        <LayoutContainer>
            <Header />
            {children}
        </LayoutContainer>
    );
}
