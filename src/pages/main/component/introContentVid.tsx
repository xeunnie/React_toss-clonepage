import React from 'react'
import mainIntroBg from './img/mainIntoBg.png'
import { IntroContentVidWrap, IntroStarter } from './style'

function IntroContentVid(){
    return(
        <IntroContentVidWrap>
            <IntroStarter>
                <img className='introBg' src={mainIntroBg} alt='intoBg'/>
                <h2>토스가 계속 <br/>도전하는 이유</h2>
            </IntroStarter>
        </IntroContentVidWrap>
    )
}

export default IntroContentVid