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

const EditSignUp = () => {      
    const classes = useStyles();
    const [profile,setProfile]=useState(undefined)
    const [load,setLoad]=useState(false)

    const{form,onChange,resetState}=useForm({
        nome:'',
        email:'',
        cpf:''        
    })

    const handleInputChange = (event)=>{
        const {name,value}=event.target
        onChange(name,value)
    }

    const handleSubmittion = (event)=>{
        event.preventDefault()        

        const body = {
            name:form.nome,
            email:form.email,
            cpf:form.cpf            
        }
        console.log(body)
        axios
            .put(`${baseUrl}/profile`,body,headers)
            .then(()=>{
                alert('Usuário alterado com sucesso!')
            })
            .catch(()=>{
                alert('Revise os dados a serem alterados !')
            })        
        resetState()
    }
    // const renderProfile = ()=>{
    //     setLoad(true)
    //     axios.get(`${baseUrl}/profile`,headers)
    //     .then((res)=>{
    //         setProfile(res.data.user)            
    //         setLoad(false)            
    //     })
    //     .catch((err)=>{
    //         alert(err.message)
    //     })
    // }
    // useEffect(()=>{
    //     renderProfile()
    // },[])    
    return (
        <ContainerEditProfile>
            <ContainerTitle>
                <TitleEdit>
                    <h2>Editar</h2>
                </TitleEdit>
                
            </ContainerTitle>
            
            <div>
                {load && <progress/>}
            </div>
            <form className={classes.root} onSubmit={handleSubmittion} >
                <TextField
                    required
                    id="nome"
                    name='nome'
                    label="Nome"
                    value={form.nome}      
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                <TextField
                    required
                    id="email"
                    name='email'
                    label="E-mail"
                    value={form.email}     
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                <TextField
                    required
                    id="cpf"
                    name='cpf'
                    label="CPF"
                    value={form.cpf}    
                    onChange={handleInputChange}                    
                    variant="outlined"
                />
                <ButtonSalvar>Salvar</ButtonSalvar>
            </form>            
        </ContainerEditProfile>
    )
}

export default EditSignUp