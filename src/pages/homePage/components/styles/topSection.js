import styled from 'styled-components';

export const StyledTopSection = styled.div`
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  h4 {
    font-size: 20px;
    font-weight: bolder;
  }

  p {
    color: #555;
  }
`;

export const StyledImgWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 30px 0;
  box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 50%);
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const StyledWelcomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 26px;
    font-weight: normal;
  }

  p {
    font-weight: bolder;
    color: #000;
    display: flex;
    align-items: center;
    font-size: 14px;

    span {
      display: flex;
      margin-right: 5px;
    }
  }
`;
