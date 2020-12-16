import React, { useState } from 'react'
import { TextField, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from '@material-ui/core'
import { LoginContainer, FormContainer, Logo, Button } from "./styled"
import LogoRappi4 from '../../../assets/LogoRappi4.svg'
import { useForm } from '../../../hooks/useForm'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { login } from '../../../services/user'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../../constants/coordinates'

const LoginPage = () => {
  const history = useHistory()
  const { form, onChange, resetState } = useForm({ email: "", password: "" })
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  };

  const handleInputChange = (event)=>{
    const {name,value}=event.target
    onChange(name,value)
}

  const handleSubmission = (e) => {
    e.preventDefault();
    resetState();
    login(form, history);
  }

  return (
    <LoginContainer>
      <Logo src={LogoRappi4} />
      <Typography variant="h6" align="center">
        Entrar
      </Typography>
      <FormContainer onSubmit={handleSubmission}>
        <TextField
          required
          name="email"
          value={form.email}
          onChange={handleInputChange}
          type="email"
          label="E-mail"
          placeholder="email@email.com"
          variant="outlined"
        />

        <FormControl variant="outlined">
          <InputLabel required>Senha</InputLabel>
          <OutlinedInput
            type={passwordVisibility ? "text" : "password"}
            value={form.password}
            name="password"
            label="Mínimo 6 caracteres"
            placeholder="Mínimo 6 caracteres"
            required
            onChange={handleInputChange}
            inputProps={{ pattern: "[0-9a-zA-Z]{6,}" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} edge="end">
                  {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit">
          Entrar
        </Button>
      </FormContainer>
      <Typography onClick={() => goToSignUp(history)} align="center" variant="subtitle1">Não possui cadastro? Clique aqui</Typography>
    </LoginContainer>
  );
};

export default LoginPage;