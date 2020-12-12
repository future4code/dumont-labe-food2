import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MainContainer, TitleContainer, RestaurantCardContainer, Img, NameRestaurant, CategoryContainer, TimeAndPriceContainer } from './styled';


const FeedPage = () => {
  const [restaurant, setRestaurant] = useState(undefined)
  const [restaurantCategory,setRestaurantCategory]=useState([])

  const getRestaurant = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/rappi4/restaurants', {
      headers: {
        auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkxXb09ubkRueEZZOHNxZ0V6bmF2IiwibmFtZSI6IklzYWJlbGEiLCJlbWFpbCI6ImlzYWJlbGFAZ21haWwuY29tIiwiY3BmIjoiMzkyLjM3NS41MzAtOTkiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjA3NjI5MzUzfQ.I_X6ydgbHTadwZ91D45XiCfsReGkeAcYREyKyNAaS20'
    }
    }).then((res) => {
      setRestaurant(res.data.restaurants)
    }).catch((error) => {
      console.log(error.message)
    })
  } 

  useEffect(() => {
    getRestaurant()
    const productList = restaurant && restaurant.filter((product) => {
        if (product.category === 'Hamburguer') {
            return true
        } 
        return false 
    })
    setRestaurantCategory(productList)   
  },[])

  const selectRestaurantType = (data) => {
      console.log(data)
      const productList = restaurant && restaurant.filter((product) => {
        if (product.category === data) {
            return true
        } 
        return false 
    })
    setRestaurantCategory(productList)    
  }
    if(restaurantCategory !== undefined){
        console.log('Categoria',restaurantCategory)
    }
    const renderCategory = restaurantCategory && restaurantCategory.map((data)=>{
        return(

            <RestaurantCardContainer>
                
                <div>
                  <Img src={data.logoUrl} />
                  <NameRestaurant>{data.name}</NameRestaurant>
                </div>

                <TimeAndPriceContainer>
                  <p>{data.deliveryTime} min</p>
                  <p>frete R${data.shipping},00</p>
                </TimeAndPriceContainer>                
            </RestaurantCardContainer>
        )
    })
    return (
        <MainContainer>

          <div> 

            <div> 
              <TitleContainer>
                <p>Rappi4</p>
              </TitleContainer>
              <hr width='100%' color='#d0d0d0'></hr>
            </div>
            

            <CategoryContainer>
              <p onClick={() => selectRestaurantType('Hamburguer')}>Burger</p>
              <p onClick={() => selectRestaurantType('Asiática')} >Asiática</p>
              <p onClick={() => selectRestaurantType('Mexicana')} >Mexicana</p>
              <p onClick={() => selectRestaurantType('Italiana')} >Italiana</p>
              <p onClick={() => selectRestaurantType('Árabe')} >Árabe</p>
              <p onClick={() => selectRestaurantType('Baiana')} >Baiana</p>
              <p onClick={() => selectRestaurantType('Petiscos')} >Petiscos</p>
              <p onClick={() => selectRestaurantType('Carne')}>Carne</p>
              <p onClick={() => selectRestaurantType('Sorvetes')}>Sorvetes</p>
            </CategoryContainer>

            {renderCategory}

          </div>

        </MainContainer>
    )
}
export default FeedPage