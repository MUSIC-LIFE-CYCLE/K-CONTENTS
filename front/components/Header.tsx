import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useAppSelector } from 'state/store';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

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

            & .logout {
                & button[type='button'] {
                    border: 1px solid transparent;
                    background-color: transparent;

                    &:hover {
                        cursor: pointer;
                        color: ${props => props.theme.colors.themeColor};
                    }
                }
            }
        }

        & .routePath {
            min-height: 4rem;
        }
    }
`;

const Header = () => {
    const router = useRouter();
    const isLoginStatus = useAppSelector(state => state.auth);
    const [isLogin, setIsLogin] = useState(isLoginStatus.token ? true : false);
    console.log(isLoginStatus);

    return (
        <HeaderContainer>
            <nav>
                <ul className="authUtil">
                    <li>
                        <Link href="#">로고</Link>
                    </li>
                    {isLogin ? (
                        <li className="logout">
                            <button type="button" onClick={signOut}>
                                로그아웃
                            </button>
                        </li>
                    ) : (
                        <li>
                            <Link href="/auth/login">로그인</Link>/
                            <Link href="/auth/signup">회원가입</Link>
                        </li>
                    )}
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
