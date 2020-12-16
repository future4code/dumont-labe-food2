import React, { useEffect } from 'react'
import Rappi4White from '../../../assets/Rappi4White.svg'
import { LoadingContainer, AllLoadingContainer} from './styled'
import {useHistory} from 'react-router-dom'
import {goToLogin, goToFeed} from '../../../constants/coordinates'
  
const LoadingPage = () => {
  const history = useHistory()
  const token = window.localStorage.getItem("token")

  useEffect(()=>{
    setTimeout(redirection, 3000)
  },[])

  const redirection = () => {
    if(token) { goToFeed(history) } else { goToLogin(history) }
  }

  return (
    <AllLoadingContainer>
      <LoadingContainer>
        <img src={Rappi4White} alt={"logo do Rappi4"}/>
      </LoadingContainer>
    </AllLoadingContainer>
  )
}

export default LoadingPage