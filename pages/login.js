import styled from'styled-components'
import React from 'react'
import Head from 'next/head'
import { Button } from '@mui/material';

function Login() {
  return (
    <Container>
        <Head>
            <title>Login</title>
        </Head>

        <LoginContainer>
            <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"/>
            <Button variant='outlined'>Sign in with Google</Button>
        </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;`

const LoginContainer = styled.div`
  padding: 100px;
  display:flex;
  flex-direction: column; 
  
`

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`