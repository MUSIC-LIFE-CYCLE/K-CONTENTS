import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderContainer = styled.header`
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
                    <Link href="/Goods">
                        <span className={router.pathname === '/Goods' ? 'active' : ''}>굿즈</span>
                    </Link>
                    <Link href="/Chart">
                        <span className={router.pathname === '/Chart' ? 'active' : ''}>차트</span>
                    </Link>
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
