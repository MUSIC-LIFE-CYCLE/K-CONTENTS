import styled from '@emotion/styled';

export const LayoutContainer = styled.section`
    max-width: 420px;
    min-height: 200px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.coral};
`;

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.colors.halfBlack};
`;
