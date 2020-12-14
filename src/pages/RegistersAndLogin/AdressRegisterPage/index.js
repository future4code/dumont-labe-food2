import React, { useEffect } from "react";
import { FormContainer, Input, ButtonSave } from "./styled";
import { useForm } from '../../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { addAdress } from '../../../services/user'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import {useRequestData} from '../../../hooks/useRequestData'
import { baseUrl } from '../../../constants/baseUrl'

const AddressPage = () => {
  useProtectedPage()
  const history = useHistory()

  const { form, onChange, resetState, setValues } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})

  const getAllAddress = useRequestData(`${baseUrl}/cadastro/endereço`,undefined)

  const handleSubmission = (e) => {
    e.preventDefault()
    resetState()
    addAdress(form, history)

  }

  const handleInputChange = (event)=>{
    const {name,value}=event.target
    onChange(name,value)
}

  useEffect(() =>{
    getAllAddress && setValues(getAllAddress.address)
  }, [getAllAddress])

  return (
    <div>
      <FormContainer onSubmit={handleSubmission}>
        <Input
          required
          id="outlined-required"
          label="Logradouro"
          type="text"
          variant="outlined"
          placeholder="Rua/Av."
          name="street"
          value={form.street}
          onChange={handleInputChange}
        />
        <Input
          required
          id="outlined-required"
          label="Número"
          type="text"
          variant="outlined"
          placeholder="Número"
          name="number"
          value={form.number}
          onChange={handleInputChange}
          defaultValue="Hello World"
        />
        <Input
          id="outlined-required"
          label="Complemento"
          type="text"
          variant="outlined"
          placeholder="Apto./Bloco"
          name="complement"
          value={form.complement}
          onChange={handleInputChange}
          defaultValue="Hello World"
        />
        <Input
          required
          id="outlined-required"
          label="Bairro"
          type="text"
          variant="outlined"
          placeholder="Bairro"
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={handleInputChange}
          defaultValue="Hello World"
        />
        <Input
          required
          id="outlined-required"
          label="Cidade"
          type="text"
          variant="outlined"
          placeholder="Cidade"
          name="city"
          value={form.city}
          onChange={handleInputChange}
          defaultValue="Hello World"
        />
        <Input
          required
          id="outlined-required"
          label="Estado"
          type="text"
          variant="outlined"
          placeholder="Estado"
          name="state"
          value={form.state}
          onChange={handleInputChange}
          defaultValue="Hello World"
        />
        <ButtonSave variant="contained" type="submit">
          Salvar
        </ButtonSave>
      </FormContainer>
    </div>
  );
};

export default AddressPage;