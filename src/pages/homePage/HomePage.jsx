import React from 'react';
import styled from 'styled-components';
import BingeableStory from '../../stories/bingeableStories/BingeableStory';
import CompletedStory from '../../stories/completedStory/CompletedStory';
import EditorPicks from '../../stories/editorPicks/EditorPicks';
import InviteStory from '../../stories/inviteStory/InviteStory';
import PaidStory from '../../stories/paidStory/PaidStory';
import TalkOfTownStory from '../../stories/talkOfTownStories/TalkOfTownStory';
import TopPickStory from '../../stories/topPicksStory/TopPickStory';
import TopSection from './components/topSection/TopSection';

export const StyledHomePageContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <TopSection />
      <TopPickStory />
      <PaidStory />
      <CompletedStory />
      <EditorPicks />
      <BingeableStory />
      <TalkOfTownStory />
      <InviteStory />
    </StyledHomePageContainer>
  );
};

export default HomePage;
