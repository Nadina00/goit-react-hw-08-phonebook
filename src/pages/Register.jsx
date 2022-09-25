import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {Box, Avatar, Typography,TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { authOperations } from '../redux/auth';

 const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = ({ target: { name, value } }) => {
      switch (name) {
        case 'name':
          return setName(value);
        case 'email':
          return setEmail(value);
        case 'password':
          return setPassword(value);
        default:
          return;
      }
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    };
  
   return (
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
        <Typography component="h2" variant="h4"> Введите свой логин и пароль</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
        <Typography component='label' variant="h6"> Имя
                <TextField fullWidth size="small" type="text" name="name" value={name} onChange={handleChange}/>
            </Typography>
            <Typography component='label' variant="h6"el> Почта
                <TextField  fullWidth size="small" type="email" name="email" value={email} onChange={handleChange}/>
            </Typography>
            <Typography component='label' variant="h6">Пароль
                <TextField  fullWidth size="small" type="password" name="password" value={password} onChange={handleChange}/>
            </Typography>
            <Button type='submit' fullWidth
              variant="contained" 
              sx={{ mt: 3, mb: 2 }}>Зарегистрироваться</Button>
        </Box>
    </Box>
   ) 
}
export default Register