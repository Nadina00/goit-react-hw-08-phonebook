import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Button} from '@mui/material';
import css from './UserMenu.module.css'
import authSelector from '../../redux/auth/auth-selector'
import authOperations from '../../redux/auth/auth-operations'

export const UserMenu = () =>{
    const dispatch = useDispatch()
    const user = useSelector(authSelector.getUser)
    const name = user.name
    return (
        <div>
            <span className={css.name}> Добро пожаловать в контакты, {name} </span>
            <Button type="button" onClick={() => dispatch(authOperations.logout())} disabled={!(name)} variant="contained" size="large"  sx={{ ml: 3 }}>
            Выйти
      </Button>
         
           
        </div>
    )
}
