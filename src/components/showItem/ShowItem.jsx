import React from 'react';
import styled from 'styled-components';

export const StyledShowItemContainer = styled.div`
  width: 100%;
  margin: 70px auto;
`;

export const StyledShowItemTitle = styled.div`
  margin-bottom: 90px;
  h2 {
    display: flex;

    span {
      display: flex;
      padding-left: 5px;
    }
  }
`;

export const StyledShowItemInfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 50%);
  padding: 0 50px;
  padding-bottom: 30px;
  border-radius: 10px;

  @media (max-width: 450px) {
    flex-direction: column;
    padding: 0 30px;
  }
`;
export const StyledShowItemImgWrapper = styled.div`
  width: 220px;
  box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 50%);
  margin-top: -50px;
  border-radius: 10px;
  margin-right: 20px;

  img {
    border-radius: 10px;
  }

  @media (max-width: 450px) {
    margin-bottom: 30px;
  }
`;

export const StyledShowItemInfo = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  h2 {
    margin-bottom: 20px;
  }

  p {
    color: gray;
    margin-bottom: 20px;
  }

  span {
    display: inline-block;
    background: gray;
    margin-right: 10px;
    padding: 3px 6px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

const ShowItem = ({ title, subtitle, icon, pic, children }) => {
  return (
    <StyledShowItemContainer>
      <StyledShowItemTitle>
        <h2>
          {title} <span>{icon}</span>
        </h2>
        <p>{subtitle}</p>
      </StyledShowItemTitle>

      <StyledShowItemInfoWrapper>
        <StyledShowItemImgWrapper>
          <img src={pic} alt={pic} />
        </StyledShowItemImgWrapper>
        <StyledShowItemInfo>{children}</StyledShowItemInfo>
      </StyledShowItemInfoWrapper>
    </StyledShowItemContainer>
  );
};

export default ShowItem;
