import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductContentAll } from 'types/ProductType';
import { Elbum } from 'components/Elbum';

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
    const [getProduct, setGetProduct] = useState<ProductContentAll[]>([]);

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
                        <select defaultValue="filter">
                            <option value="filter">필터링</option>
                            <option value="newArrival">최신순</option>
                            <option value="lowPrice">낮은가격순</option>
                            <option value="highPrice">높은가격순</option>
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
                    {getProduct.map((tem: ProductContentAll, idx: number) => {
                        return (
                            <Elbum key={idx}>
                                <Elbum.Thumbnail imgUrl={tem.imgUrl} />

                                <Elbum.Content
                                    artist={tem.artist}
                                    description={tem.description}
                                    quantity={tem.quantity}
                                    date={tem.date}
                                    price={tem.price}
                                ></Elbum.Content>
                            </Elbum>
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
