import React from 'react'
import { Typography } from '@material-ui/core'
import { ErrorContainer } from './styles'
import Footer from '../../components/footer/Footer'

const ErrorPage = () => {
  return (
    <div>
      <Footer />
      <ErrorContainer>
        <Typography align="center" variant="h4">Ops! A página não foi encontrada!</Typography>
      </ErrorContainer>
    </div>
  )
}

export default ErrorPage;