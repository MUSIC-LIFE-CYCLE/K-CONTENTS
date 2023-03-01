import { useRouter } from 'next/router';
import { HeaderContainer } from './styles';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();

    return (
        <HeaderContainer>
            <nav>
                <ul className="authUtil">
                    <li>
                        <Link href="#">로고</Link>
                    </li>
                    <li>
                        <Link href="/auth/login">로그인</Link>/
                        <Link href="/auth/signup">회원가입</Link>
                    </li>
                </ul>

                <ul className="routePath">
                    <Link href="/">
                        <span className={router.pathname === '/' ? 'active' : ''}>Home</span>
                    </Link>
                    <Link href="/goods">
                        <span className={router.pathname === '/goods' ? 'active' : ''}>굿즈</span>
                    </Link>
                    <Link href="/chart">
                        <span className={router.pathname === '/chart' ? 'active' : ''}>차트</span>
                    </Link>
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
