import { Container, LogoContainer, NavContent, NavInnerContainer, NavWrap } from './style';
import '../common/common.scss'
import logoMono from '../img/logo/logoMonoWhite.png';
import React from 'react';

function HeaderNavBar() {
    return(
        <NavWrap>
            <Container>
                <NavInnerContainer>
                    <LogoContainer>
                        <img src={logoMono} className='logoMono' alt='logo'/>
                    </LogoContainer>
                    <NavContent>
                        <ul></ul>
                        <ul>
                            <li><a href='/'>브랜드 스토리</a></li>
                            <li><a href='/'>토스의 도전</a></li>
                            <li><a href='/'>응원카드 만들기</a></li>
                            <li className='btnNavShare'><button ref='#'>공유하기</button></li>
                        </ul>
                    </NavContent>
                </NavInnerContainer>
            </Container>
        </NavWrap>
    )
}

export default HeaderNavBar;