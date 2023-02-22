import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();

    return (
        <header>
            <nav>
                <Link href="/">
                    <span className={router.pathname === '/' ? 'active' : ''}>Home</span>
                </Link>
                <Link href="/goods">
                    <span className={router.pathname === '/goods' ? 'active' : ''}>굿즈</span>
                </Link>
                <Link href="/chart">
                    <span className={router.pathname === '/chart' ? 'active' : ''}>차트</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
