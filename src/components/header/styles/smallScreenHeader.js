import styled from 'styled-components';

export const StyledSmallHeaderContainer = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }
`;
