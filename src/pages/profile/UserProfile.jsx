import React from 'react';
import { NavLink } from 'react-router-dom';
import { Images } from '../../components/images';
import { Icons } from '../../components/icons';

import styled from 'styled-components';

export const StyledUserProfileDataContainer = styled.section`
  width: 100%;
  height: 400px;
  background: darkgreen;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledUserProfileDataWrapper = styled.section`
  width: 40%;
  margin: 0 auto;
`;

export const StyledUserProfileImgBox = styled.section`
  img {
    width: 150px;
    border-radius: 50%;
  }

  h3 {
    font-size: 20px;
  }

  small {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    padding-top: 10px;
  }
`;

export const StyledUserProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  div {
    font-size: 16px;
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 530px) {
    flex-direction: column;

    div {
      margin-bottom: 10px;
    }
  }
`;

export const StyledUserProfileNavContainer = styled.section`
  border-bottom: 2px solid red;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
`;

export const StyledUserProfileNavWrapper = styled.section`
  /* border: 2px solid red; */
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 65px; */
`;

export const StyledUserProfileNavLinks = styled.ul`
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  height: 65px;
  /* transition: 0.3s ease all; */

  li {
    /* border: 2px dashed black; */
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0;
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    transition: 0.3s ease all;

    :hover {
      border-bottom: 3px solid #555;
      padding-left: 10px;
    }
  }
`;

export const StyledUserProfileNavButtons = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  width: 280px;

  button {
    border: 2px solid #ccc;
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 15px 10px;
    background: #fff;
    color: #555;
    font-weight: bold;

    span {
      display: inline-block;
      padding-left: 10px;
    }
  }
`;

export const StyledAddMinusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  border: 2px solid #777;
  border-radius: 30px;
  overflow: hidden;

  div:first-child {
    display: flex;
    align-items: center;

    p {
      background: darkviolet;
      color: #fff;
      font-weight: bold;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      padding-left: 5px;
      font-size: 12px;
    }
  }
  div:last-child {
    border-left: 1px solid #777;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    color: #000;
    font-size: 20px;
  }
`;

export const activeLink = {
  borderBottom: '3px solid #555 ',
};

const UserProfile = () => {
  return (
    <div>
      <StyledUserProfileDataContainer>
        <StyledUserProfileDataWrapper>
          <StyledUserProfileImgBox>
            <img src={Images.Image1} alt='' />
            <h3>Timothy Attah</h3>
            <small>@timothyattah</small>
          </StyledUserProfileImgBox>

          <StyledUserProfileInfo>
            <div>
              <span>0</span>
              <p>Works</p>
            </div>
            <div>
              <span>1</span>
              <p>ReadingList</p>
            </div>
            <div>
              <span>0</span>
              <p>Followers</p>
            </div>
          </StyledUserProfileInfo>
        </StyledUserProfileDataWrapper>
      </StyledUserProfileDataContainer>
      <StyledUserProfileNavContainer>
        <StyledUserProfileNavWrapper>
          <StyledUserProfileNavLinks>
            <NavLink to='/users/profile' exact activeStyle={activeLink}>
              <li>About</li>
            </NavLink>
            <NavLink to='/conversations' exact activeStyle={activeLink}>
              <li>Conversations</li>
            </NavLink>
            <NavLink to='/following' exact activeStyle={activeLink}>
              <li>Following</li>
            </NavLink>
          </StyledUserProfileNavLinks>

          <StyledUserProfileNavButtons>
            <StyledAddMinusBox>
              <div>
                <p>My</p>
                <span>
                  <Icons.Minus />
                </span>
              </div>
              <div>
                <Icons.Add />
              </div>
            </StyledAddMinusBox>

            <button>
              <Icons.Setting /> <span>Edit Profile</span>
            </button>
          </StyledUserProfileNavButtons>
        </StyledUserProfileNavWrapper>
      </StyledUserProfileNavContainer>
      <div></div>
      <footer></footer>
    </div>
  );
};

export default UserProfile;
