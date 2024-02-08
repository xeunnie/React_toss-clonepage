import './introContentVid.scss';
import mainIntroBg from './img/mainIntoBg.png'

function IntroContentVid(){
    return(
        <div className='introContentVid'>
            <div className='introStarter'>
                <img className='introBg' src={mainIntroBg} alt='intoBg'/>
                <h2>토스가 계속 <br/>도전하는 이유</h2>
            </div>
            
        </div>
    )
}

export default IntroContentVid