'use client';

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Background from 'public/Login-background.jpg';
import Link from 'next/link';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // backgroundImage: `url(${signupbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },
  card: {
    backgroundColor: 'white',
    backdropFilter: 'blur(24px) brightness(125%)',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
  },
  input: {
    marginBottom: '16px',
  },
  submitButton: {
    marginTop: '16px',
    marginBottom: '8px',
    backgroundColor: '#227BA5',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#1D6490',
    },
    card: {
      backgroundColor: 'blue',
      backdropFilter: 'blur(40px) brightness(170%)',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '100%',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      marginBottom: '16px',
    },
    submitButton: {
      marginTop: '16px',
      marginBottom: '8px',
      backgroundColor: '#227BA5',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: '#1D6490',
      },
    },
    signupLink: {
      color: '##227BA5',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      cursor: 'pointer',
    },
    cursor: 'pointer',
  },
};
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    if (!email || !password) {
      return;
    }
    axios
      .post('/user/login', { email, password })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', `${response.data._id}`);
      })
      .catch(e => console.log('oopsie'));
  };
  return (
    <Box
      sx={{
        background: `url(${Background.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      <Card sx={styles.card}>
        <CardContent sx={{ mb: '75px' }}>
          <Typography
            sx={{
              mb: '1px',
              textAlign: 'center',
              fontSize: '50px',
              cursor: 'pointer',
            }}
          >
            <img
              src={'/Transparent-Logo.png'}
              alt="Orbital logo"
              height="325px"
              width="325px"
            />
          </Typography>

          <Typography
            variant="h5"
            color="black"
            sx={{
              mb: '16px',
              textAlign: 'center',
            }}
          >
            Log in to your account
          </Typography>
          <TextField
            sx={styles.input}
            label="Email"
            size="medium"
            fullWidth
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            sx={styles.input}
            label="Password"
            size="medium"
            type="password"
            fullWidth
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            color="secondary"
            variant="contained"
            size="large"
            fullWidth
            onClick={loginHandler}
          >
            Login
          </Button>
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', mt: '25px', fontSize: '20px' }}
          >
            Don't have an account? <Link href="/signup">Sign up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
