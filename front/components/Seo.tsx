import Head from 'next/head';

interface SeoTitleProps {
    title: string;
}

const Seo = ({ title }: SeoTitleProps) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default Seo;
