import styled from 'styled-components';

export const StyledListItemContainer = styled.div`
  margin: 30px 0;
`;

export const StyledListItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
`;

export const StyledNextListItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 40px;
  }
`;
