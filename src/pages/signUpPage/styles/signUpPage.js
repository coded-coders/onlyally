import styled, { css } from 'styled-components';

export const StyledSignUpContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 50%);

  h1 {
    color: red;
    font-size: 30px;
    font-weight: 400;
    margin: 20px 0;
    span {
      font-weight: 700;
    }
  }

  h2 {
    margin: 20px 0;
    font-weight: 900;
  }

  small {
    margin: 20px 0;
    a {
      color: blue;
    }
  }
`;

export const Info = styled.p`
  max-width: 300px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 20px;

  ${(props) =>
    props.primary &&
    css`
      font-weight: 600;
      font-size: 18px;
      margin: 0;
    `}
`;

export const BoxWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  height: 40px;
  display: flex;

  border-radius: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease all;
  :hover {
    opacity: 0.7;
  }

  ${(props) =>
    props.facebook &&
    css`
      background-color: blue;
      color: #fff;

      span {
        background: #fff;
        color: blue;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    `}

  ${(props) =>
    props.google &&
    css`
      background-color: #fff;
      color: #000;
      border: 1px solid #333;
      margin: 20px 0;

      span {
        background: #fff;
        color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    `}

  ${(props) =>
    props.email &&
    css`
      background-color: #222;
      color: #fff;
      margin-top: 10px;
    `}
`;

export const OrWrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    height: 1px;
    width: 100px;
    border: 1px solid #ccc;
  }

  span {
    display: inline-block;
    margin: 0 10px;
    text-transform: uppercase;
  }
`;
