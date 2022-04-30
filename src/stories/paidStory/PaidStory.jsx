import React from 'react';
import ListsItems from '../../components/listItems/ListsItems';
import Items from '../../components/listItems/Items';
import { paidStories } from '../../components/helper/DummyData';
import {
  StyledPaidStoryContainer,
  StyledPaidStoryButton,
} from '../styles/paidStories';

const PaidStory = () => {
  return (
    <StyledPaidStoryContainer>
      <ListsItems title='Paid Stories' subtitle='New and noteworthy stories'>
        {paidStories.map((item) => (
          <Items item={item} />
        ))}
      </ListsItems>

      <StyledPaidStoryButton>
        <button>See all ad-free stories</button>
      </StyledPaidStoryButton>
    </StyledPaidStoryContainer>
  );
};

export default PaidStory;
