import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TextField } from '@mui/material';

export const Filter = ({ value, onChange }) => {
  return (
    <Typography component="label" variant="h6">
      Find contacts by name
      <TextField
        type="text"
        value={value}
        onChange={onChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        variant="filled"
        size="small"
        sx={{ ml: 2 }}
      />
    </Typography>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
