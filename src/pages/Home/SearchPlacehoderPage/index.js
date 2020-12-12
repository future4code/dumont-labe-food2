import React, { useState } from 'react';
import axios from 'axios';
import { SearchContainer, Input} from './styled';

import SearchIcon from '@material-ui/icons/Search';


const SearchPlacehoder = () => {
    const [ search, setSearch ] = useState()
    const [ restaurant, setRestaurant ] = useState(undefined)

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

      const results = restaurant.filter((result) => {
          if (search === '') {
              return result
          } else if (restaurant.name.toLowerCase().includes(search.toLowerCase())) {
              return result
          }

      }).map((result) => {
          return (
              <div>
                  <p>{result.name}</p>
              </div>
          )
      })
    
      console.log(results)

    return (
        <div>
            <SearchContainer>
              <SearchIcon />
              <Input placeholder='Restaurante' onChange={(event) => { setSearch(event.target.value)}}/>
            </SearchContainer>
        </div>
    )
}

export default SearchPlacehoder