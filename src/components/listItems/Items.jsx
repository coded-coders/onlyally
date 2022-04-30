import React from 'react';
import {
  StyledItemsContainer,
  StyledNameWrapper,
  StyledItemsImgWrapper,
} from './styles/items';
const Items = ({ item }) => {
  return (
    <StyledItemsContainer>
      <div>
        <StyledItemsImgWrapper>
          <img src={item.pic} alt={item.pic} />
        </StyledItemsImgWrapper>
        <StyledNameWrapper>
          <span>{item.currency}</span>
          <p>{item.name}</p>
        </StyledNameWrapper>
      </div>
    </StyledItemsContainer>
  );
};

export default Items;
