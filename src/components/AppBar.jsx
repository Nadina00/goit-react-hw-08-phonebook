import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Toolbar } from '@mui/material';
import css from './AppBar.module.css';
import { Navigation } from './Navigation';
import { Auth } from './Auth';
import { UserMenu } from './UserMenu/UserMenu';
import authSelector from 'redux/auth/auth-selector';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <Box className={css.header}>
      <Toolbar>
        <nav className={css.box}>
          <Navigation />
         {isLoggedIn ? <UserMenu /> : <Auth />}
        </nav>
      </Toolbar>
    </Box>
  );
};
