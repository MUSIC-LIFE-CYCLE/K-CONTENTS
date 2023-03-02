import Image from 'next/image';
import { ProductImgUrl } from 'types/ProductType';

const ElbumThumbnail = ({ imgUrl }: ProductImgUrl) => {
    return (
        <>
            <Image src={imgUrl} width={100} height={100} alt="Elbum Image" priority />
        </>
    );
};

export { ElbumThumbnail };
