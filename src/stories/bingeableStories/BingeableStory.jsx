import React from 'react';
import ListsItems from '../../components/listItems/ListsItems';
import Items from '../../components/listItems/Items';
import { bingeableStories } from '../../components/helper/DummyData';
import { StyledPaidStoryContainer } from '../styles/paidStories';

const BingeableStory = () => {
  return (
    <StyledPaidStoryContainer>
      <ListsItems
        title="Betcha Can't Just Read One"
        subtitle='These bingeable stories are waiting for you'
      >
        {bingeableStories.map((item) => (
          <Items item={item} />
        ))}
      </ListsItems>
    </StyledPaidStoryContainer>
  );
};

export default BingeableStory;
