import React from 'react';
import LargeScreenHeader from './LargeScreenHeader';
import SmallScreenHeader from './SmallScreenHeader';
import { StyledMainHeaderContainer } from './styles/header';

const Header = () => {
  return (
    <StyledMainHeaderContainer>
      <LargeScreenHeader />
      <SmallScreenHeader />
    </StyledMainHeaderContainer>
  );
};

export default Header;
