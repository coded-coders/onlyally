import styled from 'styled-components';

export const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 50%);
  margin: 20px 0;
  border-radius: 10px;
  transition: 0.3s ease all;

  :hover {
    box-shadow: none;
  }
`;

export const StyledItemsImgWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;

  img {
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledNameWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    width: 50px;
    padding: 3px 0;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #eee;
  }

  span {
    display: flex;
    margin-right: 2px;
  }
`;
