import Header from './Header';
import { LayoutContainer } from './styles';

export default function Layout({ children }) {
    return (
        <LayoutContainer>
            <Header />
            {children}
        </LayoutContainer>
    );
}
