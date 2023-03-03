import styled from '@emotion/styled';
import Link from 'next/link';
import GoogleSymbol from 'public/images/googleSymbol.png';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

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
                            padding: 1.4rem;
                            border: 0;
                            background-color: #f0ffff;
                            border-radius: 0.4rem;
                            font-size: 1.4rem;
                            line-height: 2rem;
                            width: calc(100% - 32%);
                            font-weight: 600;
                            box-shadow: 0 2px 1px 0 rgba(155, 155, 155, 0.5);

                            &:hover {
                                cursor: pointer;
                                opacity: 0.8;
                            }
                        }

                        & .googleLogin {
                            margin-top: 1rem;
                            padding: 1.4rem;
                            background-color: #f0ffff;
                            border: 1px solid transparent;
                            font-weight: 600;
                            box-shadow: 0 2px 1px 0 rgba(155, 155, 155, 0.5);
                            width: calc(100% - 32%);
                            & span {
                                margin-right: 1rem;
                                & img {
                                    width: 24px;
                                    height: 24px;
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
                    }
                }
            }
        }
    }
`;

const Login = () => {
    const { data, status }: Session = useSession();
    console.log(data, status, ' login');

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
                                    <button type="button" className="kakaoLogin">
                                        KaKao
                                    </button>
                                </dt>
                                <dt>
                                    <button type="button" className="naverLogin">
                                        Naver
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
