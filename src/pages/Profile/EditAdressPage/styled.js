import styled from 'styled-components'

export const ContainerEditProfile = styled.div`
    width: 360px;
    height: 640px;
    padding: 0 0 294px;    
`
export const ContainerTitle=styled.div`
    width: 360px;
    height: 64px;
    margin: 0 0 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: var(--white);
`
export const TitleEdit = styled.div`
    width: 175px;
    height: 44px;
    margin: 20px 92px 0 54px;
    padding: 13px 67.5px 12px;
    h2{
        width: 40px;
        height: 19px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: var(--black);
    }
`
export const ButtonSalvar = styled.button`
    width: 328px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #e86e5a;
`