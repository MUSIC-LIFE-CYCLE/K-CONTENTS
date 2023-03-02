import { ElbumThumbnail, ElbumContent } from './product';
import styled from '@emotion/styled';

const ElbumContainer = styled.article`
    max-width: 100%;
`;

const Elbum = ({ children }) => {
    return <ElbumContainer>{children}</ElbumContainer>;
};

Elbum.Thumbnail = ElbumThumbnail;
Elbum.Content = ElbumContent;

export { Elbum };
