import React from 'react';
import ListsItems from '../../components/listItems/ListsItems';
import Items from '../../components/listItems/Items';
import { completedStories } from '../../components/helper/DummyData';
import { StyledPaidStoryContainer } from '../styles/paidStories';

const CompletedStory = () => {
  return (
    <StyledPaidStoryContainer>
      <ListsItems
        title='Completed Stories'
        subtitle='Binge from start to finish'
      >
        {completedStories.map((item) => (
          <Items item={item} />
        ))}
      </ListsItems>
    </StyledPaidStoryContainer>
  );
};

export default CompletedStory;
