import React from 'react';
import HeaderNavBar from '../../layout/headerNavBar';
import IntroContentText from './component/introContentText';
import IntroContentVid from './component/introContentVid';
import StoryContent01 from './component/storyContent_1';
import StoryContent02 from './component/storyContent_2';
import { MainIntroSection, MainPage, MainStory1, MainStory2, MainStorySection } from './style';

function MainEntry() {
    return (
        <MainPage>
            <HeaderNavBar/>
            <MainIntroSection>
                <IntroContentVid/>
                <IntroContentText/>
            </MainIntroSection>
            <MainStorySection>
                <MainStory1>
                    <StoryContent01/>
                </MainStory1>
                <MainStory2>
                    <StoryContent02/>
                </MainStory2>
            </MainStorySection>
        </MainPage>
    );
}

export default MainEntry;
