import { useEffect, useState } from 'react'
import axios from 'axios'
import {headers} from '../constants/headers.js'

export const useRequestData = (url,initialState)=>{
    const [data,setData]=useState(initialState)

    useEffect(()=>{
        axios.get(url,headers)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[url])
    return data
}