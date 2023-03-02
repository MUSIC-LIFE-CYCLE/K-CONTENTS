import { ElbumThumbnail, ElbumContent } from './product';
import styled from '@emotion/styled';
import { ElbumChildrenProps } from 'types/PropsType';

const ElbumContainer = styled.article`
    padding-bottom: 2rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
`;

const Elbum = ({ children }: ElbumChildrenProps) => {
    return <ElbumContainer>{children}</ElbumContainer>;
};

Elbum.Thumbnail = ElbumThumbnail;
Elbum.Content = ElbumContent;

export { Elbum };
