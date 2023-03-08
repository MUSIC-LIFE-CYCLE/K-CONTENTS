import { useEffect } from 'react';
import axios from 'axios';

export default function Home({ results }) {
    // const fetchData = async () => {
    //     const res = await axios.get('/mocks');
    //     console.log(res);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    console.log(results, ' sSRSSRSSRSSR');
    return <>Hello world</>;
}

export async function getServerSideProps() {
    let results = await fetch('http://localhost:3000/mocks');
    results = JSON.parse(JSON.stringify(results));

    return {
        props: {
            results,
        },
    };
}
