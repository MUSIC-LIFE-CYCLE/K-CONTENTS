import { useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export default function Home({ results }: any) {
    console.log(results, ' sSRSSRSSRSSR');
    return <>Hello world</>;
}

export const getServerSideProps: GetServerSideProps = async () => {
    let results = await axios.get('http://localhost:3000/api/product');

    return {
        props: {
            results,
        },
    };
};
