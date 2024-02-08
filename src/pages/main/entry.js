import HeaderNavBar from '../../layout/headerNavBar';
import IntroContentText from './component/introContentText';
import IntroContentVid from './component/introContentVid';
import StoryContent_1 from './component/storyContent_1';
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
                <StoryContent_1/>
            </div>
        </div>
    );
}

export default MainEntry;
