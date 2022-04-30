import React from 'react';
import { Icons } from '../../../../components/icons';
import { Images } from '../../../../components/images';
import {
  StyledTopSection,
  StyledImgWrapper,
  StyledWelcomeWrapper,
} from '../styles/topSection';

const TopSection = () => {
  return (
    <StyledTopSection>
      <h4>If you are a zombie...</h4>
      <p>How far would you go to find your sister?</p>

      <StyledImgWrapper>
        <img src={Images.contemporary1} alt={Images.contemporary1} />
      </StyledImgWrapper>

      <StyledWelcomeWrapper>
        <h2>Welcome home, timothyattah!</h2>
        <p>
          <span>
            <Icons.EqualizeFill />
          </span>
          Content Preferences
        </p>
      </StyledWelcomeWrapper>
    </StyledTopSection>
  );
};

export default TopSection;
