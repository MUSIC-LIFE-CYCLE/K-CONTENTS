import Image from 'next/image';

const ElbumThumbnail = ({ imgUrl }) => {
    return (
        <>
            <Image src={imgUrl} width={100} height={100} alt="Elbum Image" priority />
        </>
    );
};

export { ElbumThumbnail };
