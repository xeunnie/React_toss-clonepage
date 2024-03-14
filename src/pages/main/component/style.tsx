import { styled } from '@mui/material/styles';

export const IntroContentTextWrap = styled('div')({
    marginTop: '500px',
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    'h2':{
        fontSize: '54px',
        color: '#fff',
        lineHeight: '1.4',
        fontWeight: '900',
    }
})

export const IntroContentVidWrap = styled('div')({
    height: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: '1'
})

export const IntroStarter = styled('div')({
    'h2':{
        color: '#fff',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: '80px',
        lineHeight: '1.3',
        fontWeight: 900,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const StoryContent1 = styled('div')({
    width: '100%',
    height: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '130px 30px',
    display: 'flex',
    justifyContent: 'center'
})

export const TextSection = styled('div')({
    margin: '0 auto',
    width: '30%',
    'h2' :{
        color: '#fff',
        fontSize: '54px',
        fontWeight: '900',
        lineWeight: 1.3,
        whiteSpace: 'pre-line',
        marginBottom: '25px'
    },
    'p':{
        color: '#fff',
        fontWeight: '500',
        fontSize: '17px'
    }
})

export const CardSection = styled('div')({
    display: 'flex',
    gap: '32px',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '450px',
    flex: 1,
    margin: '0 auto',
})

export const Cards = styled('div')({
    // @ts-ignore
    height: '600px',
    width: '100%',
    padding: '40px',
    boxSizing: 'borderBox',
    position: 'relative',
    objectFit: 'cover',
    top: 0,
    left: 0,
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column'
})

export const Card1 = styled('div')({
    background: 'url(../component/img/main_story1_card1.png) no-repeat center',
    backgroundSize: 'cover',
    justifyContent: 'flex-end',
})

export const CardTypo = styled('div')({
    display: 'flex',
        flexDirection: 'column',
        width: '100%',
        'h3': {
            color: '#fff',
            fontWeight: 700,
            fontSize: '36px',
            marginBottom: '20px'
        },
        'p':{
            color: '#b0b8c1',
            fontWeight: 600,
            fontSize: '17px'
        }
})

export const Card2 = styled('div')({
    backgroundColor: '#cce314',
    color: '#104b2f',
    height: 'auto !important',
    'img':{
        width: '64px',
        height: '64px',
        minWidth: '64px',
        filter: 'brightness(0) saturate(100%) invert(19%) sepia(7%) saturate(5894%) hue-rotate(103deg) brightness(99%) contrast(87%)'
    },
    'h3': {
        marginTop: '5px',
        fontSize: '22px',
        textAlign: 'center',
        fontWeight: 700
    },
    'p': {
        fontSize: '64px',
        fontWeight: 800
    }
})
export const Card2Wrap = styled('div') ({
    height: '360px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

export const Card3 = styled('div')({
    background: 'url(./img/main_story1_card3.png) no-repeat center',
    backgroundSize: 'cover',
    height: '600px',
    padding: '35px',
    color: '#191f28',
    'h3':{
        fontWeight: 700,
        margin: '5px 0 14px',
        letterSpacing: '-1px'
    },
    'p':{
        color: '#333d4b',
        fontWeight: 600,
        fontSize: '17px'
    }
})

export const Card4 = styled('div')({
    background: 'url(../component/img/main_story1_card4.png) no-repeat center',
    backgroundSize: 'cover',
    padding: '40px',
    'h3': {
        color: '#fff',
        fontWeight: 700,
        marginBottom: '25px'
    },
    'button': {
        borderRadius: '40px',
        fontSize: '18px',
        fontWeight: 700,
        width: '180px',
        lineHeight: '54px',
        color: '#435968',
        textAlign: 'center',
        border: 0,
        backgroundColor: '#f2f4f6'
    }
})

export const Card5 = styled('div')({
    backgroundColor: '#194aa6',
    color: '#fff',
    'h3':{
        marginBottom: '25px'
    },
    'li':{
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: 1.6
    },
    'button':{
        width: '120px',
        height: '36px',
        borderRadius: '40px',
        border: 0,
        backgroundColor: '#fff',
        color: '#1b4aa6',
        fontWeight: 700,
        marginTop: 'auto',
        fontSize: '15px'
    }
})

//storycontents2
export const StoryContent2 = styled('div')({
    width: '100%',
    height: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '130px 30px',
    display: 'flex',
    justifyContent: 'center',
    'CardSection':{
        position: 'relative',
    },
    'Cards':{
        width: '100%',
        height: '500px',
        boxSizing: 'borderBox',
        padding: '30px',
        // position: absolute;
        overflow: 'hidden'
    },
    'Card1':{
        background: 'url(../component/img/main_story2_card1.png) no-repeat center',
        backgroundSize: 'cover'
    },
    'Card2':{
        backgroundColor: '#57148a',
        color: '#e7bfe9',
        height: '500px !important',
        'img':{
            filter: 'brightness(0) saturate(100%) invert(93%) sepia(16%) saturate(1380%) hue-rotate(207deg) brightness(93%) contrast(96%)',
        },
    }
})

export const Card2Title = styled('div')({
    fontSize: '38px',
    fontWeight: 800,
    marginBottom: '24px'
})
export const Card2text = styled('div') ({
    fontWeight: 700,
    fontSize: '20px'
})
export const Card2etc = styled('div')({
    marginTop: 'auto',
    fontSize: '24px'
})