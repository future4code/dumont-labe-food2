import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {AddressTitle, Container, EditIcon, Rectangle, TextProfile, Title, TitleBar, TitleText, Address,OrderTitle, BarDiv, ResumeOrders,RestaurantTitle, OrderData, OrderPrice} from './styled'
import {baseUrl} from '../../../constants/baseUrl'
import { headers } from '../../../constants/headers'
import edit from '../../../assets/edit.svg'
import {useHistory} from 'react-router-dom'
import Footer from '../../../components/footer/Footer'

const ProfilePage = () => {    
    const [profile,setProfile]=useState([])
    const [order,setOrder]=useState([])
    const [load,setLoad]=useState(false)

    const history = useHistory()

    const goToEditProfile = (id)=>{
        history.push(`perfil/editar/cadastro/${id}`)
    }
    const goToEditAddress = (id)=>{
        history.push(`perfil/editar/endereço/${id}`)
    }

    const renderProfiles = ()=>{
        setLoad(true)
        axios.get(`${baseUrl}/profile`,headers)
        .then((res)=>{
            setProfile(res.data.user)            
            setLoad(false)
        })
        .catch((err)=>{
            console.log(err.message)
            alert(`Erro ${err.message}`)
        })
    }

    const renderOrders=()=>{
        setLoad(true)
        axios.get(`${baseUrl}/orders/history`,headers)
        .then((res)=>{
            setOrder(res.data.orders)
            setLoad(false)            
        })
        .catch((err)=>{
            alert(`Erro com pedidos `,err.message)
            console.log(err.message)
        })
    }

    useEffect(()=>{
        renderProfiles()
        renderOrders()
    },[])

    function convertTimeStamp (data){
        const date = new Date(data);
        let options = { day: 'numeric', month: 'long', year: 'numeric' }
        const newDate = date.toLocaleDateString('pt-PT', options);        
        return (newDate)
    }

    return (
        <Container>            
            <TitleBar>
                <Title>
                    <TitleText>Meu perfil</TitleText>
                </Title>                
            </TitleBar>            
                <TextProfile>{profile.name}<EditIcon onClick={()=>goToEditProfile(profile.id)} src={edit}/></TextProfile>
                <TextProfile>{profile.email}</TextProfile>
                <TextProfile>{profile.cpf}</TextProfile>
            <Rectangle>
                <AddressTitle>Endereço cadastrado <EditIcon onClick={()=>goToEditAddress(profile.id)} src={edit}/></AddressTitle>                
                <Address>{profile.address}</Address>
            </Rectangle> 
            <OrderTitle>Histórico de pedidos</OrderTitle>
            <BarDiv></BarDiv>
            {order !== undefined ? order.map((orders)=>{
                return(
                    <ResumeOrders key={orders.id}>                        
                        <RestaurantTitle >{orders.restaurantName}</RestaurantTitle>
                        <OrderData>{convertTimeStamp(orders.createdAt)}</OrderData>
                        <OrderPrice>SUBTOTAL R${(orders.totalPrice).toFixed(2)}</OrderPrice>
                    </ResumeOrders>
                )
            }): <p>Você não realizou nenhum pedido</p>}
            <div>
                {load && <progress/>}
            </div>
            <Footer/>
        </Container>
    )
}

export default ProfilePage