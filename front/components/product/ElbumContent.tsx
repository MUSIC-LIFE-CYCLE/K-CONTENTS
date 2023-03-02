import styled from '@emotion/styled';

const ElbumContentCotainer = styled.dl``;

const ElbumContentArtist = styled.dt``;

const ElbumContentDescription = styled.dd``;

const ElbumContentQuantity = styled.dd``;

const ElbumContentDate = styled.dd``;

const ElbumContentPrice = styled.dd``;

const ElbumContent = ({ artist, description, quantity, date, price }) => {
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
