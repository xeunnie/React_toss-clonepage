import HeaderNavBar from '../../layout/headerNavBar';
import IntroContentText from './component/introContentText';
import IntroContentVid from './component/introContentVid';
import StoryContent_1 from './component/storyContent_1';
import StoryContent_2 from './component/storyContent_2';
import './entry.scss';

function MainEntry() {
    return (
        <div className="mainPage">
            <HeaderNavBar/>
            <div className='mainIntroSection'>
                <IntroContentVid/>
                <IntroContentText/>
            </div>
            <div className='mainStorySection'>
                <div className='mainStory1'><StoryContent_1/></div>
                <div className='mainStory2'><StoryContent_2/></div>
            </div>
        </div>
    );
}

export default MainEntry;
