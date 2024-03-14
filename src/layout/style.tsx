// $paddingContainerBase: 48px;
import { styled } from '@mui/material/styles';

export const Container = styled('div')({
    width: '100%',
    height: '100%',
    padding: '0.9rem 1.6rem 0',
    position: 'relative',
    overflow: 'hidden',
  });

export const NavWrap = styled('div')({
    display: 'block',
    width: '100%',
    height: '60px',
    position: 'fixed',
    top: '0',
    zIndex: '50',
    backgroundColor: 'rgba(0,29,58,0.18)',
});

export const NavInnerContainer = styled('div')({
    width: '92%',
    height: '100%',
    maxWidth: 'calc(100% - var($paddingContainerBase))',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
})

export const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginRight: '24px',
    'img':{
        width: '100px',
        height: '30px'
    }
})

export const NavContent = styled('div')({
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between',
    alignItems: 'center',
    'ul' :{
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        margin: 0,
        'li' : {
            height: '100%',
            display: 'flex',
            padding: '0 8px',
            whiteSpace: 'nowrap',
            listStyle: 'none',
            'a, button':{
                color: '#fff',
                fontWeight: '600',
                padding: '12px 10px',
                fontSize: '15px',
                lineHeight: '20px'
            }
        }
    }
})

export const BtnNavShare = styled('div')({
    paddingRight: '8px',
    'button': {
        backgroundColor: 'rgba(222,222,255,0.19)',
        border: '0 solid transparent',
        borderRadius: '20px',
        padding: '7px 12px !important',
        height: '32px'
    }
})