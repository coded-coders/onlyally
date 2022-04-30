import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../components/icons';
import {
  StyledSignUpContainer,
  BoxWrapper,
  Info,
  OrWrapper,
} from './styles/signUpPage';

const SignUpPage = () => {
  return (
    <StyledSignUpContainer>
      <h1>
        ReadersPlugs <span>M</span>
      </h1>
      <Info primary>Where stories live</Info>

      <h2>Join ReadersPlugs</h2>

      <Info>
        Be a part of a global community of readers and writers, all connected
        through the power of story
      </Info>

      <BoxWrapper facebook>
        <span>
          <Icons.Facebook />
        </span>
        <p>Sign up with FaceBook</p>
      </BoxWrapper>

      <BoxWrapper google>
        <span>
          <Icons.Google />
        </span>
        <p>Sign up with Google</p>
      </BoxWrapper>

      <OrWrapper>
        <div />
        <span>Or</span>
        <div />
      </OrWrapper>

      <BoxWrapper email>
        <p>Sign up with Email</p>
      </BoxWrapper>

      <small>
        If you already have an account, <Link to='/signin'>Log in</Link>.
      </small>
    </StyledSignUpContainer>
  );
};

export default SignUpPage;
