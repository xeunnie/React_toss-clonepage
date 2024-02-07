import './headerNavBar.scss'
import '../common/common.scss'
import logoMono from '../img/logoMonoWhite.png'

function HeaderNavBar() {
    return(
        <nav className='navWrap'>
            <div className='Container'>
                <div className='navInnerContainer'>
                    <div className='logoContainer'>
                        <img src={logoMono} className='logoMono' alt='logo'/>
                    </div>
                    <div className='navContent'>
                        <ul></ul>
                        <ul>
                            <li><a href='#'>브랜드 스토리</a></li>
                            <li><a href='#'>토스의 도전</a></li>
                            <li><a href='#'>응원카드 만들기</a></li>
                            <li className='btnNavShare'><button href='#'>공유하기</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderNavBar;