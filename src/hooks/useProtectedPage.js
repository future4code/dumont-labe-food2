import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
export const useProtectedPage = ()=>{
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            alert('Você precisa estar logado para acessar essa seção !')
            history.push('/')
        }
    },[history])
}