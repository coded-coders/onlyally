import React from 'react';
import ListsItems from '../../components/listItems/ListsItems';
import Items from '../../components/listItems/Items';
import { talkOfTownStories } from '../../components/helper/DummyData';
import { StyledPaidStoryContainer } from '../styles/paidStories';

const TalkOfTownStory = () => {
  return (
    <StyledPaidStoryContainer>
      <ListsItems
        title='Talk of The Town'
        subtitle='Stories sparking conversation'
      >
        {talkOfTownStories.map((item) => (
          <Items item={item} />
        ))}
      </ListsItems>
    </StyledPaidStoryContainer>
  );
};

export default TalkOfTownStory;
