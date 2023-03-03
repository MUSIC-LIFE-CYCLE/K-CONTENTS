import styled from '@emotion/styled';
import { ProductContent } from 'types/ProductType';

const ElbumContentCotainer = styled.dl`
    font-size: ${props => props.theme.fontSize.normal};
`;

const ElbumContentArtist = styled.dt`
    color: #999;
    font-size: ${props => props.theme.fontSize.base};
`;

const ElbumContentDescription = styled.dd`
    color: #555;
    padding-top: 0.4rem;
    font-size: ${props => props.theme.fontSize.base};
`;

const ElbumContentQuantity = styled.dd`
    color: #999;
    padding-top: 0.4rem;
`;

const ElbumContentDate = styled.dd`
    color: #999;
`;

const ElbumContentPrice = styled.dd`
    color: #000;
    padding-top: 0.4rem;
`;

const ElbumContent = ({ artist, description, quantity, date, price }: ProductContent) => {
    return (
        <ElbumContentCotainer>
            <ElbumContentArtist>{artist}</ElbumContentArtist>
            <ElbumContentDescription>{description}</ElbumContentDescription>
            <ElbumContentQuantity>판매수량: {quantity}</ElbumContentQuantity>
            <ElbumContentDate>{date}</ElbumContentDate>
            <ElbumContentPrice>{price}</ElbumContentPrice>
        </ElbumContentCotainer>
    );
};

export { ElbumContent };
