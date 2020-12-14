import React from 'react'
import Home from '../../assets/homepage.svg'
import Cart from '../../assets/cart.svg'
import User from '../../assets/avatar.svg'
import HomeOrange from '../../assets/homepage-orange.svg'
import CartOrange from '../../assets/cart-orange.svg'
import UserOrange from '../../assets/avatar-orange.svg'
import { ContainerFooter } from './Styled'
import { useHistory } from 'react-router-dom'

function Footer (){
    const history = useHistory()

    const goToHome = ()=>{
        history.push('/feed')
        console.log(history.location.pathname)
    }
    const goToCart = ()=>{
        history.push('/carrinho')
        console.log(history)
    }
    const goToProfile=()=>{
        history.push('/perfil')
        console.log(history)
    }

    const renderFooter = ()=>{
        if(history.location.pathname==='/feed'){
            return(
                <ContainerFooter>
                    <div>
                        <img src={HomeOrange} onClick={goToHome}/>
                    </div>
                    <div>
                        <img src={Cart} onClick={goToCart}/>
                    </div>
                    <div>
                        <img src={User} onClick={goToProfile}/>
                    </div>
                </ContainerFooter>
            )
        } else if(history.location.pathname==='/carrinho'){
                return(
                    <ContainerFooter>
                        <div>
                            <img src={Home} onClick={goToHome}/>
                        </div>
                        <div>
                            <img src={CartOrange} onClick={goToCart}/>
                        </div>
                        <div>
                            <img src={User} onClick={goToProfile}/>
                        </div>
                    </ContainerFooter>
                )
            } else if (history.location.pathname==='/perfil'){
                return(
                    <ContainerFooter>
                        <div>
                            <img src={Home} onClick={goToHome}/>
                        </div>
                        <div>
                            <img src={Cart} onClick={goToCart}/>
                        </div>
                        <div>
                            <img src={UserOrange} onClick={goToProfile}/>
                        </div>
                    </ContainerFooter>
                )
            }
    }
    return(
        <ContainerFooter>
           {renderFooter()}
        </ContainerFooter>
    )
}

export default Footer