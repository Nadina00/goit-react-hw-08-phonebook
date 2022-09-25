import React from 'react';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import css from './Auth.module.css';

export const Auth = () => {
  return (
    <nav className={css.box}>
      <NavLink to="/login" className={css.link}>
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
            listStyle: 'none',
            textDecoration: 'none',
          }}
        >
          {' '}
          Логин{' '}
        </Typography>
      </NavLink>
      <NavLink to="/register" className={css.link}>
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
          Регистрация
        </Typography>
      </NavLink>
    </nav>
  );
};
