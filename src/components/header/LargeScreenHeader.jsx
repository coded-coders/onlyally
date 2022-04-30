import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../icons';
import {
  StyledHeaderContainer,
  StyledHeaderLeft,
  StyledHeaderRight,
  StyledInputBoxWrapper,
  StyledUserProfileWrapper,
} from './styles/header';

const LargeScreenHeader = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderLeft>
        <h1>
          <Link to='/'>
            ReadersPlugs
            <span>
              <Icons.Book />
            </span>
          </Link>
        </h1>

        <h2>
          <Link to='/'>
            My
            <Icons.Book />
          </Link>
        </h2>

        <div>
          Browse
          <span>
            <Icons.ArrowDown />
          </span>
        </div>

        <div>
          Community
          <span>
            <Icons.ArrowDown />
          </span>
        </div>

        <StyledInputBoxWrapper>
          <span>
            <Icons.Search />
          </span>
          <input type='text' placeholder='Search' />
        </StyledInputBoxWrapper>
      </StyledHeaderLeft>
      <StyledHeaderRight>
        <div>
          Write
          <span>
            <Icons.ArrowDown />
          </span>
        </div>

        <button>
          <span>
            <Icons.Premium />
          </span>
          Try Premium
        </button>
        <StyledUserProfileWrapper>
          <span>
            <Icons.User />
          </span>
          <span>timothyattah</span>
          <span>
            <Icons.ArrowDown />
          </span>
        </StyledUserProfileWrapper>
      </StyledHeaderRight>
    </StyledHeaderContainer>
  );
};

export default LargeScreenHeader;
