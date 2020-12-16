import styled from 'styled-components'

export const Container = styled.div`
    width:360px;
    height:640px;
` 
export const TitleBar = styled.div`
    width: 360px;
    height: 64px;
    margin: 0 0 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: var(--white);
`
export const Title = styled.div`
    width: 175px;
    height: 44px;
    margin: 20px 92px 0 93px;
    padding: 13px 53.5px 12px;
`
export const TitleText = styled.h3`
    width: 68px;
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
`
export const TextProfile = styled.p`
    width: 328px;
    height: 18px;
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);     
`
export const EditIcon = styled.img`
    width: 24px;
    height: 24px;
    margin: -16px 16px 12px 320px;
    object-fit: contain;
`
export const Rectangle = styled.div`
    width: 360px;
    height: 76px;
    margin: 16px 0;
    padding: 16px;
    background-color: #eeeeee;  
`
export const AddressTitle = styled.p`
    width: 328px;
    height: 18px;
    margin: 0 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`
export const Address = styled.p`
    width: 328px;
    height: 18px;
    margin: 8px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`
export const OrderTitle = styled.p`
    width: 328px;
    height: 18px;
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`
export const BarDiv=styled.hr`
    width: 328px;
    height: 1px;
    margin: 0 auto;    
`
export const ResumeOrders = styled.div`
    width: 328px;
    height: 102px;
    margin: 7px 0 0;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
export const RestaurantTitle = styled.h3`
    width: 296px;
    height: 18px;
    margin: 0 0 9px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
`
export const OrderData = styled.p`
    width: 296px;
    height: 18px;
    margin: 9px 0 7px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: var(--black);
`
export const OrderPrice = styled.p`
    width: 296px;
    height: 18px;
    margin: 7px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`