import styled from '@emotion/styled';
import Link from 'next/link';

const SignupContainer = styled.section`
    max-width: 100%;
`;

const SignupContent = styled.section`
    & form {
        & h1 {
            font-size: 3.2rem;
            font-family: 'Viga', sans-serif;
            text-align: center;
        }

        & .signWrap {
            margin-top: 2rem;
            & ul {
                & li {
                    margin-bottom: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    & label {
                        font-size: 1.4rem;
                        font-weight: 600;
                        padding-bottom: 1rem;
                        text-align: left;
                        width: 68%;
                    }

                    & input {
                        padding: 1.4rem;
                        border: 1px solid #c9cacc;
                        border-radius: 0.4rem;
                        font-size: ${props => props.theme.fontSize.base};
                        line-height: 2rem;
                        color: #7d7e80;
                        width: 60%;
                    }
                }
            }

            & .submitBtn {
                padding: 2rem 0;
                text-align: center;

                & button {
                    padding: 1.4rem;
                    background-color: #d3d3d3;
                    border-radius: 0.4rem;
                    font-size: 1.4rem;
                    width: 68%;
                    border: 1px solid transparent;
                    font-weight: 600;
                    box-shadow: 0 2px 1px 0 rgba(155, 155, 155, 0.5);
                    background-color: ${props => props.theme.colors.white};

                    &:hover {
                        cursor: pointer;
                        background-color: #ead2a8;
                    }
                }
            }
        }
    }
`;

const Signup = () => {
    return (
        <SignupContainer>
            <SignupContent>
                <form>
                    <h1>
                        <Link href="/">SIGN UP</Link>
                    </h1>
                    <div className="signWrap">
                        <ul>
                            <li>
                                <label>닉네임</label>
                                <input
                                    placeholder="닉네임"
                                    name="nickName"
                                    autoComplete="off"
                                    required
                                />
                            </li>

                            <li>
                                <label>이메일</label>
                                <input
                                    placeholder="이메일"
                                    name="email"
                                    autoComplete="off"
                                    required
                                />
                            </li>

                            {/* {email.length > 1 ? (
                                <li className={`${isEmailCheck ? 'none' : 'block'}`}>
                                    <label>올바른 이메일 주소를 입력해 주세요.</label>
                                </li>
                            ) : (
                                ''
                            )} */}

                            <li>
                                <label>비밀번호</label>
                                <input
                                    type="password"
                                    minLength={8}
                                    name="password"
                                    maxLength={21}
                                    autoComplete="off"
                                    placeholder="비밀번호"
                                    required
                                />
                            </li>
                        </ul>

                        <div className="submitBtn">
                            <button type="submit">회원가입</button>
                        </div>
                    </div>
                </form>
            </SignupContent>
        </SignupContainer>
    );
};

export default Signup;
