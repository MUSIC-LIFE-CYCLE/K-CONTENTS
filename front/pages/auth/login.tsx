import styled from '@emotion/styled';
import Link from 'next/link';
import GoogleSymbol from 'public/images/googleSymbol.png';
import NaverSymbol from 'public/images/naverSymbol.png';
import KakaoLogin from 'public/images/kakao.png';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from 'state/store';
import { getUserEmail, getUserName, getUserToken } from 'state/slice/authSlice';
import { useEffect } from 'react';

const LoginContainer = styled.section`
    max-width: 100%;
`;

const LoginContent = styled.section`
    display: flex;
    justify-content: center;
    & form {
        width: 100%;
        text-align: center;

        & .loginWrap {
            & ul:first-of-type {
                display: flex;
                flex-direction: column;
                gap: 2rem;

                & li {
                    & h1 {
                        font-size: 3.2rem;
                        font-family: 'Viga', sans-serif;
                    }

                    & input {
                        padding: 1.4rem;
                        border: 1px solid #c9cacc;
                        border-radius: 0.4rem;
                        font-size: ${props => props.theme.fontSize.base};
                        line-height: 2rem;
                        color: #7d7e80;
                        width: calc(100% - 40%);
                    }
                }
            }

            & .util {
                width: calc(100% - 50%);
                padding: 1rem 0;
                & small {
                    padding-left: 0.4rem;
                    border-left: 1rem solid #e2e2e2;
                    font-size: ${props => props.theme.fontSize.base};
                    font-weight: 400;

                    & a {
                        color: ${props => props.theme.colors.halfBlack};
                        &:hover {
                            font-weight: 600;
                            color: gray;
                        }
                    }
                }
            }
            & article {
                padding-top: 2rem;
                & dl {
                    & dt {
                        & .loginBtn {
                            padding: 1.9rem 1.4rem;
                            border: 0;
                            background-color: #fff;
                            font-size: 1.4rem;
                            width: calc(100% - 32%);
                            font-weight: 600;
                            box-shadow: 0 2px 1px 0 rgba(155, 155, 155, 0.5);

                            &:hover {
                                cursor: pointer;
                                background-color: #ead2a8;
                            }
                        }

                        & .googleLogin {
                            margin-top: 1rem;
                            padding: 1.4rem;
                            background-color: #fff;
                            border: 1px solid transparent;
                            font-weight: 600;
                            box-shadow: 0 2px 1px 0 rgba(155, 155, 155, 0.5);
                            width: calc(100% - 32%);
                            & span {
                                margin-right: 1rem;
                                & img {
                                    vertical-align: middle;
                                }
                            }

                            & small {
                                font-size: 1.4rem;
                            }

                            &:hover {
                                cursor: pointer;
                                background-color: #4285f4;
                            }
                        }

                        & .kakaoLogin {
                            margin-top: 1rem;
                            border: 1px solid transparent;
                            width: calc(100% - 32%);
                            box-sizing: content-box;
                            background-color: transparent;

                            &:hover {
                                cursor: pointer;
                                opacity: 0.8;
                            }
                        }

                        & .naverLogin {
                            background-color: #03c75a;
                            border: 1px solid transparent;
                            width: calc(100% - 32%);
                            margin-top: 1rem;
                            padding: 1rem;
                            font-weight: 600;
                            & span {
                                margin-right: 1rem;
                                & img {
                                    vertical-align: middle;
                                }
                            }

                            & small {
                                font-size: 1.4rem;
                                color: ${props => props.theme.colors.white};
                            }

                            &:hover {
                                cursor: pointer;
                                opacity: 0.8;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Login = () => {
    const { data, status } = useSession();
    const dispatch = useAppDispatch();

    console.log(data, status);

    const dispatchLoginStatus = () => {
        if (status === 'authenticated') {
            dispatch(getUserName(data.user?.name));
            dispatch(getUserEmail(data.user?.email));
            dispatch(getUserToken(data.accessToken));
        }
    };

    useEffect(() => {
        dispatchLoginStatus();
    }, [data, status]);

    return (
        <LoginContainer>
            <LoginContent>
                <form>
                    <div className="loginWrap">
                        <ul>
                            <li>
                                <h1>
                                    <Link href="/">LOGIN</Link>
                                </h1>
                            </li>
                            <li>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="이메일"
                                    autoComplete="off"
                                />
                            </li>
                            <li>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="비밀번호"
                                    autoComplete="off"
                                />
                            </li>
                        </ul>

                        <div className="util">
                            <small>
                                <Link href="/signup">회원가입</Link>
                            </small>
                        </div>

                        <article>
                            <dl>
                                <dt>
                                    <button type="submit" className="loginBtn">
                                        로그인
                                    </button>
                                </dt>

                                <dt>
                                    <button
                                        type="button"
                                        className="naverLogin"
                                        onClick={() => signIn('naver')}
                                    >
                                        <span>
                                            <Image
                                                src={NaverSymbol}
                                                alt="naverSymbol"
                                                width={32}
                                                height={32}
                                            />
                                        </span>
                                        <small>네이버 로그인</small>
                                    </button>
                                </dt>

                                <dt>
                                    <button
                                        type="button"
                                        className="googleLogin"
                                        onClick={() => signIn('google')}
                                    >
                                        <span>
                                            <Image
                                                src={GoogleSymbol}
                                                alt="googleSymbol"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <small>Google</small>
                                    </button>
                                </dt>

                                <dt>
                                    <button
                                        type="button"
                                        className="kakaoLogin"
                                        onClick={() => signIn('kakao')}
                                    >
                                        <Image
                                            src={KakaoLogin}
                                            width={285}
                                            height={54}
                                            alt="kakaoLogin"
                                            priority
                                        />
                                    </button>
                                </dt>
                            </dl>
                        </article>
                    </div>
                </form>
            </LoginContent>
        </LoginContainer>
    );
};

export default Login;
