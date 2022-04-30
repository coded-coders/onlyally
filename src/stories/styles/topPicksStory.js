import styled from 'styled-components';

export const StyledTopStoryContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    flex-direction: column;
    margin-top: 80px;
  }
`;

export const StyledTopStoryImgWrapper = styled.div`
  box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 50%);

  max-width: 250px;
  width: 100%;
  margin-right: 10px;
`;

export const StyledTopStoryInfoWrapper = styled.div`
  max-width: 420px;
  width: 100%;

  h2 {
    display: flex;
    align-items: center;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    margin: 20px 0;

    span {
      display: flex;
      margin-left: 10px;
    }
  }

  p {
    color: gray;
  }
`;

export const StyledInfoList = styled.ul`
  max-width: 180px;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    div {
      display: flex;
      color: gray;
      p {
        margin-left: 3px;
      }

      span {
        display: flex;
      }
    }

    button {
      background: #777;
      padding: 3px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      color: #fff;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  button:first-child {
    width: 120px;
    height: 35px;
    background-color: #000;
    color: #fff;
    border-radius: 50px;
  }

  button:last-child {
    width: 30px;
    height: 30px;
    background-color: gray;
    color: #000;
    border-radius: 100%;
    margin: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    font-size: 20px;
  }
`;

export const StyledMoreDetailsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 0;

  button {
    display: flex;
    align-items: center;
    font-weight: bold;
    background: #fff;

    span {
      display: flex;
      font-size: 30px;
    }
  }
`;
