import {CardSection, Cards, TextSection, Card2Title, Card2text, Card2etc} from './style';
// import story2card2 from '../../../img/img/main_story2_card2.svg'
import React from 'react';
import { StoryContent2 } from './style';

function StoryContent02() {
    return(
        <StoryContent2>
            <TextSection>
                <h2>누구에게나 쉬운,<br/>다정한 금융</h2>
                <p>초등학생도 처음으로 내 이름 새겨진 카드를 만들고, 새로운 앱 사용이 어렵던 부모님도 손쉽게 스마트 금융에 스며들어요. 평범한 일상이 쉽지 않던 사람들도 스스로 접근 가능한, 다정한 금융이야말로 모두의 삶을 바꿀 수 있어요.</p>
            </TextSection>
            <CardSection>
                <Cards card1></Cards>
                <Cards card2>
                    {/*<img alt={''} src={story2card2}/>*/}
                    <Card2Title>안전하고 편리한, 송금</Card2Title>
                    <Card2text>"현금을 안가지고 다녀도 돼서 완전 편해요. <br/> 친구랑 더치페이할 때 🐶꿀이에요."</Card2text>
                    <Card2etc>최지은 짱짱</Card2etc>
                </Cards>
            </CardSection>
        </StoryContent2>
    )
}

export default StoryContent02;