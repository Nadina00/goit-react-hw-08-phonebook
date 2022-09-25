import React from 'react';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import css from './Auth.module.css';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={css.link}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            color: '#2a363b',
            textDecoration: 'none',
          }}
        >
          Главная
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#2a363b',
              textDecoration: 'none',
            }}
          >
            {' '}
            Контакты
          </Typography>
        </NavLink>
      )}
    </nav>
  );
};
