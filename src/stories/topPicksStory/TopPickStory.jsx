import React from 'react';
import ListsItems from '../../components/listItems/ListsItems';
import Items from '../../components/listItems/Items';
import { topPicksStory } from '../../components/helper/DummyData';
import { Icons } from '../../components/icons';
import { Images } from '../../components/images';
import {
  StyledButtonWrapper,
  StyledInfoList,
  StyledMoreDetailsBtn,
  StyledTopStoryContainer,
  StyledTopStoryImgWrapper,
  StyledTopStoryInfoWrapper,
} from '../styles/topPicksStory';

const TopPickStory = () => {
  return (
    <div>
      <ListsItems title='Top Picks For You'>
        {topPicksStory.map((item) => (
          <Items item={item} />
        ))}
      </ListsItems>

      <StyledTopStoryContainer>
        <StyledTopStoryImgWrapper>
          <img src={Images.horror1} alt={Images.horror1} />
        </StyledTopStoryImgWrapper>
        <StyledTopStoryInfoWrapper>
          <h2>
            Horror & Paranormal
            <span>
              <Icons.Check />
            </span>
          </h2>
          <StyledInfoList>
            <li>
              <span>
                <Icons.Dollar />
              </span>
              <div>
                <span>
                  <Icons.Lists />
                </span>
                <p>43 parts</p>
              </div>
              <button type='button'> Complete</button>
            </li>
          </StyledInfoList>

          <StyledButtonWrapper>
            <button>Free preview</button>
            <button>
              <Icons.Add />
            </button>
          </StyledButtonWrapper>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            dignissimos quam vero aperiam dolor culpa quod porro dolore. Quia,
            consequuntur velit nesciunt rem accusamus doloremque nam suscipit
            odio a debitis!
          </p>

          <StyledMoreDetailsBtn>
            <button>
              More details
              <span>
                <Icons.ArrowLeft />
              </span>
            </button>
          </StyledMoreDetailsBtn>
        </StyledTopStoryInfoWrapper>
      </StyledTopStoryContainer>
    </div>
  );
};

export default TopPickStory;
