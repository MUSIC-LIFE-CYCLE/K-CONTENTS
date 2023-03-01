import Header from './Header';
import { LayoutContainer } from './styles';

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
