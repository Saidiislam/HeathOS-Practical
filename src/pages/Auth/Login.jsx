import React from 'react'
import { 
  Container,
  ContentBox,
  LoginForm 
} from "../../Components"

const Login = () => {
  return (
    <section className=''>
      <Container>
        <ContentBox>
          <LoginForm />
        </ContentBox>
      </Container>
    </section>
  )
}

export default Login