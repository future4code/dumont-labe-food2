import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const TitleContainer = styled.div`
    flex-direction: column;
    justify-content: center;

    p {
        text-align: center;
    }
`

export const RestaurantCardContainer = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;

`

export const Img = styled.img`
    width: 270px;
    height: 140px;
`

export const NameRestaurant = styled.p`
    color: #e86e5a;
`

export const TimeAndPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #b8b8b8;
`

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: scroll;
    margin: 0 10px;
    width: 360px;

    p {
        justify-content: space-between;
    }
`

