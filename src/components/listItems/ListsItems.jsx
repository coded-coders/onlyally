import React from 'react';
import { Icons } from '../icons';
import {
  StyledListItemContainer,
  StyledListItemWrapper,
  StyledListItem,
  StyledNextListItem,
} from './styles/listsItems';

const ListsItems = ({ children, title, subtitle, name }) => {
  return (
    <StyledListItemContainer>
      <h3>{title}</h3>
      <small>{subtitle}</small>
      <StyledListItemWrapper>
        <StyledListItem>{children}</StyledListItem>
        <StyledNextListItem>
          <Icons.ArrowRightCircle />
        </StyledNextListItem>
      </StyledListItemWrapper>
    </StyledListItemContainer>
  );
};

export default ListsItems;
