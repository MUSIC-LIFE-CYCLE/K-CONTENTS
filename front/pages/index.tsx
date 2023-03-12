import { InferGetServerSidePropsType } from 'next';
import styled from '@emotion/styled';

const MainContainer = styled.section`
    background-color: red;
    width: 200px;
    height: 200px;
    color: white;
    font-size: 2.4rem;
`;

export default function Home({ result }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <MainContainer>
            <h1>Hello world</h1>
            <h2>Home</h2>
        </MainContainer>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/product', {
        headers: { 'Content-Type': 'application/json' },
    });
    const result: ProductContentAll = await res.json();

    // const results = await axios.get('http://localhost:3000/api/product', {
    //     headers: { 'Content-Type': 'application/json' },
    // });
    // results = JSON.stringify(JSON.parse(results));
    // const apap = await results.json();
    // console.log(context);
    // results = JSON.parse(JSON.stringify(results));
    return {
        props: {
            result,
        },
    };
};
