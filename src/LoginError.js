import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginError = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>Please login first</h1>
      <Button variant='contained' onClick={() => { navigate("/") }}>Back to Login page</Button>
    </div>
  )
}

export default LoginError;
