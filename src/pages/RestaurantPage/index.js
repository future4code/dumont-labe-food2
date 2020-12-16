import React, { useEffect, useState } from "react";
//import { useParams } from 'react-router-dom'
import axios from "axios";
import {
  Title,
  Image,
  InfoName,
  Rectangle,
  Imagem,
  ItemName,
  ItemDescription,
  ItemPrice,
  Button,
  Category,
  DeliveryTime,
  Shipping,
  Address,
  LogoUrl,
  ItemContainer,
  RestaurantContainer,
  DivShippingTime,
} from "../RestaurantPage/styledRestaurantPage";

const RestaurantPage = () => {
  const [details, setDetails] = useState(undefined);
  const [load, setLoad] = useState(false);

  //const token = localStorage.getItem('token')

  //const params = useParams()

  //const id = params.id

  const restaurantDetails = () => {
    //ao invés do número 1 no final do link,vou usar a props que a Isa gerar na home; depois mudar no router tbm: restaurante/:id

    setLoad(true);

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4/restaurants/1",
        {
          headers: {
            auth:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZ4UjluaDhScmpCTllpb2FRQlJwIiwibmFtZSI6IkxpbGlhbiIsImVtYWlsIjoibGlsaWFuQGZ1dHVyZTQuY29tIiwiY3BmIjoiMDc1LjgzMi4xMjAtMTQiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjA3NTQwMjkxfQ.I8Np6mR0Ug5bNOG2QZJOZONW2fznRgTe_w4jpwG9ssg",
          },
        }
      )
      .then((response) => {
        setDetails(response.data);
        setLoad(false);
      });
  };
  // ali no response.data teria que ter algo mais? No labeddit está response.data.post, mas não encontrei nada mais na api get restaurant details

  useEffect(() => {
    restaurantDetails();
  }, []);
  console.log(details);

  //como faço para chamar as informações da api? Como colocar div dentro das tags styled? Como inserir material ui dentro das tags?
  const renderRestaurant = () => {
    if (details !== undefined) {
      return (
        <RestaurantContainer>
          <LogoUrl scr={details.restaurant.logoUrl} />
          <InfoName>{details.restaurant.name}</InfoName>
          <Category>{details.restaurant.category}</Category>
          <DivShippingTime>
            <DeliveryTime>{details.restaurant.deliveryTime} min</DeliveryTime>
            <Shipping>
              Frete R${details.restaurant.shipping.toFixed(2)}
            </Shipping>
          </DivShippingTime>
          <Address>{details.restaurant.address}</Address>
        </RestaurantContainer>
      );
    } else {
      return (
        <div>
          <p>Carregando...</p>
        </div>
      );
    }
  };

  return (
    <div>
      <Title>Restaurante</Title>
      <div>{load && <progress />}</div>
      {renderRestaurant()}

      <div>
        {details &&
          details.restaurant.products.map((product) => {
            return (
              <Rectangle>
                <Imagem src={product.photoUrl} />
                <ItemContainer>
                  <ItemName>{product.name}</ItemName>
                  <ItemDescription>{product.description}</ItemDescription>
                  <ItemPrice>R${product.price.toFixed(2)}</ItemPrice>
                </ItemContainer>
                <Button>adicionar</Button>
              </Rectangle>
            );
          })}
      </div>

      {/* <div>
            <h1>Essa é a página de restaurante</h1>
        </div> */}
    </div>
  );
};

export default RestaurantPage;
