import './storyContent_1.scss';
import story1_card2_icon from './img/main_story1_card2.png';


function StoryContent_1() {
    return(
        <div className='storyContent1'>
            <div className='textSection'>
                <h2>출발은 작은 불편을 해결하는 것부터</h2>
                <p>금융생활에 당연한 불편은 없어요. 토스 하나면 언제 어디서든 송금 10초컷 가능. 복잡했던 보험료 돌려받기, 시간에 쫓겨 관공서를 찾아야 했던 증명서 발급도 앉은 자리에서 오케이. 자유로운 금융은 우리의 시간과 공간을 더 여유롭게 해요.</p>
            </div>
            <div className='cardSection'>
                <div className='cards card1'>
                    <div className='cardTypo'>
                        <h3>토스 송금으로 아낀<br/>1억 1천 7백만 시간</h3>
                        <p>총 116,799,450시간을 아꼈어요.</p>
                    </div>
                </div>
                <div className='cards card2'>
                    <div className='card2Wrap'>
                        <img src={story1_card2_icon} alt=''/>
                        <h3>퇴근길 버스에서, 자기 전 침대에서<br/>은행에 가지 않고 신청한 대출</h3>
                        <p>859,378건</p>
                    </div>
                </div>
                <div className='cards card3'>
                    <h3>대한민국 성인 2.5명 중<br/>1명은 토스로 신용점수 확인</h3>
                    <p>총 16,730,177명이 토스로 신용점수를 확인했어요.</p>
                </div>
            </div>
        </div>
    )
}

export default StoryContent_1;