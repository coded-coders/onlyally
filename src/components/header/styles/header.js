import styled from 'styled-components';

export const StyledMainHeaderContainer = styled.header`
  width: 100%;
  height: auto;
  padding: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 50%);
  z-index: 100;
`;

export const StyledHeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  h1 a,
  h2 a {
    color: red;
    display: flex;
  }

  h2 {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;

    span {
      display: flex;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      display: none;
    }

    h2 {
      display: flex;
    }
  }

  div {
    margin: 0 10px;
  }
`;

export const StyledInputBoxWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 30px;

  svg {
    position: absolute;
    left: 0;
    top: 3px;
    font-size: 18px;
  }

  input {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    padding-left: 30px;
    border-bottom: 2px solid #ccc;
  }
`;

export const StyledHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    background-color: blue;
    color: #fff;
    border-radius: 30px;
    font-size: 16px;
    span {
      display: flex;
      align-items: center;
      color: #000;
      padding-right: 10px;
    }
    :hover {
      opacity: 0.7;
    }
  }

  div:first-child {
    display: flex;
    cursor: pointer;
  }

  @media (max-width: 420px) {
    div:first-child {
      margin: 0 20px;
      font-size: 20px;
    }

    div:last-child {
      font-size: 20px;
      width: 30px;
      height: 30px;
    }
  }
`;

export const StyledUserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
  }

  span:first-child {
    svg {
      font-size: 35px;
      margin-right: 3px;
    }
  }

  span:last-child {
    svg {
      display: flex;
      margin-bottom: 4px;
    }
  }
`;
