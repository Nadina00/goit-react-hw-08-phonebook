import { useState } from "react";
import { useDispatch } from "react-redux";
import {Box, Avatar, Typography,TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import authOperations from '../redux/auth/auth-operations'


const Login = () => {
const  [email, setEmail] = useState('')
const  [password, setPassword] = useState('')
const dispatch = useDispatch()
   
const handleChange = ({target: {name, value}}) => {
    switch (name){
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
       default:
        return 
    }
  };
  const handleSubmit = (evt) =>{
    evt.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');

  }


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
          <Typography component="h1" variant="h4"> Введите свой логин и пароль</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
            <Typography component='label' variant="h6"> Почта
                <TextField type="email" name="email" value={email} onChange={handleChange} fullWidth size="small"/>
            </Typography>
            <Typography component='label' variant="h6">Пароль
                <TextField type="password" name="password" value={password} onChange={handleChange} fullWidth size="small"/>
            </Typography>
            <Button type='submit' fullWidth
              variant="contained" 
              sx={{ mt: 3, mb: 2 }}>Войти</Button>
        </Box>
    </Box>
   ) 
}
export default Login