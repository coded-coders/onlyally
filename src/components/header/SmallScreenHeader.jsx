import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../icons';
import { StyledSmallHeaderContainer } from './styles/smallScreenHeader';

const SmallScreenHeader = () => {
  return (
    <StyledSmallHeaderContainer>
      <div>
        <Link to='/'>
          My
          <span>
            <Icons.Book />
          </span>
        </Link>
      </div>

      <div>
        <Icons.Search />
      </div>

      <div>
        <Icons.Notification />
      </div>

      <div>
        <Icons.User />
      </div>
    </StyledSmallHeaderContainer>
  );
};

export default SmallScreenHeader;
