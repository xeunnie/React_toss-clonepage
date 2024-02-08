import './storyContent_2.scss';
import story2card2 from './img/main_story2_card2.svg'

function StoryContent_2() {
    return(
        <div className='storyContent2'>
            <div className='textSection'>
                <h2>누구에게나 쉬운,<br/>다정한 금융</h2>
                <p>초등학생도 처음으로 내 이름 새겨진 카드를 만들고, 새로운 앱 사용이 어렵던 부모님도 손쉽게 스마트 금융에 스며들어요. 평범한 일상이 쉽지 않던 사람들도 스스로 접근 가능한, 다정한 금융이야말로 모두의 삶을 바꿀 수 있어요.</p>
            </div>
            <div className='cardSection'>
                <div className='cards card1'></div>
                <div className='cards card2'>
                    <img src={story2card2}/>
                    <div className='card2Title'>안전하고 편리한, 송금</div>
                    <p className='card2text'>"현금을 안가지고 다녀도 돼서 완전 편해요. <br/> 친구랑 더치페이할 때 🐶꿀이에요."</p>
                    <p className='card2etc'>12세 남자</p>
                </div>
            </div>
        </div>
    )
}

export default StoryContent_2;