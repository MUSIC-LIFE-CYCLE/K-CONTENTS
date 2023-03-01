import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProductContent } from 'types/ProductType';
import Image from 'next/image';
import { GetServerSideProps } from 'next';

const GoodsContainer = styled.section`
    max-width: 100%;
`;

const GoodsContent = styled.section`
    height: 100vh;

    & .filterNav {
        & div {
            display: flex;
            justify-content: flex-end;
            min-height: 4rem;
            padding-right: 2rem;

            & select {
            }
        }

        & ul {
            display: flex;
            justify-content: space-around;
            min-height: 4rem;
            align-items: center;
            border-top: 0.1rem solid #d3d3d3;
            border-bottom: 0.1rem solid #d3d3d3;

            & li {
                & button[type='button'] {
                    background-color: transparent;
                    border: 0;
                }
            }
        }
    }

    & .productListWrap {
        padding: 2rem 2rem 0 2rem;
    }
`;

const goods = () => {
    const [getProduct, setGetProduct] = useState<ProductContent[]>([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('/api/product', {
                headers: { 'Content-Type': 'application/json' },
            });
            setGetProduct(res.data.data.content);
        } catch (err: unknown) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <GoodsContainer>
            <GoodsContent>
                <div className="filterNav">
                    <div>
                        <select>
                            <option selected>필터링</option>
                            <option>최신순</option>
                            <option>낮은가격순</option>
                            <option>높은가격순</option>
                        </select>
                    </div>

                    <ul>
                        <li>
                            <button type="button">앨범</button>
                        </li>
                        <li>
                            <button type="button">응원봉</button>
                        </li>
                    </ul>
                </div>
                <div className="productListWrap">
                    {getProduct.map((tem, idx) => {
                        return (
                            <ul key={idx}>
                                <li>
                                    <Image
                                        src={tem.imgUrl}
                                        width={100}
                                        height={100}
                                        alt="Elbum Image"
                                        priority
                                    />
                                </li>
                                <li>{tem.artist}</li>
                                <li>{tem.date}</li>
                                <li>{tem.description}</li>
                                <li>{tem.price}</li>
                                <li>{tem.quantity}</li>
                            </ul>
                        );
                    })}
                </div>
            </GoodsContent>
        </GoodsContainer>
    );
};

export default goods;

// export const getServerSideProps: GetServerSideProps = async () => {
//     const { results } = await axios.get('http://localhost:3000/api/product');
//     return {
//         props: {
//             results,
//         },
//     };
// };
