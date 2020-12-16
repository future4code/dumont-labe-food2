import React, {useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {headers} from '../../../constants/headers'
import axios from 'axios'
import {baseUrl} from '../../../constants/baseUrl'
import {useForm} from '../../../hooks/useForm'
import { ButtonSalvar, ContainerEditProfile, ContainerTitle, TitleEdit } from './styled';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '328px',
      },
    },
  }));


const EditAdress = () => {
    const classes = useStyles();    
    const [load,setLoad]=useState(false)

    const{form,onChange,resetState}=useForm({
        street:'',
        number:'',
        neighbourhood:'',
        city:'',
        state:'',
        complement:'',
    })

    const handleInputChange = (event)=>{
        const {name,value}=event.target
        onChange(name,value)
    }

    const handleSubmittion = (event)=>{
        event.preventDefault()        

        const body = {
            street:form.street,
            number:form.number,
            neighbourhood:form.neighbourhood,
            city:form.city,
            state:form.state,
            complement:form.complement
        }
        console.log(body)
        axios
            .put(`${baseUrl}/address`,body,headers)
            .then(()=>{
                alert('Endereço alterado com sucesso!')
            })
            .catch(()=>{
                alert('Revise os dados a serem alterados !')
            })        
        resetState()
    }
    
    return (
        <ContainerEditProfile>
            <ContainerTitle>
                <TitleEdit>
                    <h2>Endereço</h2>
                </TitleEdit>
                
            </ContainerTitle>
            
            <div>
                {load && <progress/>}
            </div>
            <form className={classes.root} onSubmit={handleSubmittion} >
                <TextField
                    required
                    id="street"
                    name='street'
                    label="Logradouro"
                    value={form.street}      
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                <TextField
                    required
                    id="number"
                    name='number'
                    label="Número"
                    value={form.number}     
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                 <TextField
                    required
                    id="complement"
                    name='complement'
                    label="Complemento"                    
                    value={form.complement}    
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                <TextField
                    required
                    id="neighbourhood"
                    name='neighbourhood'
                    label="Bairro"
                    value={form.neighbourhood}    
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                <TextField
                    required
                    id="city"
                    name='city'
                    label="Cidade"
                    value={form.city}    
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                <TextField
                    required
                    id="state"
                    name='state'
                    label="Estado"
                    value={form.state}    
                    onChange={handleInputChange}                    
                    variant="outlined"
                />               
                <p onClick={handleSubmittion}>Salvar</p>
                <ButtonSalvar>Salvar</ButtonSalvar>
            </form>
        </ContainerEditProfile>
    )
}

export default EditAdress