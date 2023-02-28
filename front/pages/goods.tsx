import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProductContent } from 'types/ProductType';
import Image from 'next/image';

const GoodsContainer = styled.section`
    max-width: 100%;
`;

const GoodsContent = styled.section`
    height: 100vh;

    & .filterNav {
        & div {
            display: flex;
            justify-content: flex-end;
            padding-right: 2rem;

            & select {
            }
        }

        & ul {
            display: flex;
            justify-content: space-around;
            background-color: ${props => props.theme.colors.blue};
        }
    }
`;

const goods = () => {
    const [getProduct, setGetProduct] = useState<ProductContent>({
        content: {
            artist: '',
            description: '',
            quantity: 1,
            date: '',
            price: '',
        },
        imgUrl: [],
    });

    const fetchData = async () => {
        try {
            const res = await axios.get('/api/product', {
                headers: { 'Content-Type': 'application/json' },
            });
            // const str = JSON.stringify(res);
            console.log('api api api api', res);
            setGetProduct(res.data.data);
        } catch (err: unknown) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    // const result = getProduct.map(e => e);
    console.log('asdasd', getProduct);

    return (
        <GoodsContainer>
            <GoodsContent>
                <div className="filterNav">
                    <div>
                        <select>
                            <option>필터링</option>
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
                <div>
                    {/* <ul>
                        <li>
                            <Image src={getProduct}
                        </li>
                    </ul> */}
                    <ul>
                        <li>
                            <Image src={getProduct.imgUrl} />
                        </li>
                        <li>{getProduct.content.artist}</li>
                        <li>{getProduct.content.date}</li>
                        <li>{getProduct.content.description}</li>
                        <li>{getProduct.content.price}</li>
                        <li>{getProduct.content.quantity}</li>
                    </ul>
                </div>
            </GoodsContent>
        </GoodsContainer>
    );
};

export default goods;

// export async function getServerSideProps() {
//     const { results } = await (await fetch(`http://localhost:3000/api/product`)).json();
//     return {
//         props: {
//             results,
//         },
//     };
// }
