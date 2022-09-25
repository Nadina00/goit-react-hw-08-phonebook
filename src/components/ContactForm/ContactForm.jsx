import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector } from 'redux/contacts/contacts-selector';
import contactsOperations from '../../redux/contacts/contacts-operation';
import { Button, TextField, Box, Typography } from '@mui/material';
import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const itemContact = useSelector(contactsSelector.getContacts);
  const dispatch = useDispatch();

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    if (itemContact.find(contact => contact.name.toLowerCase() === name)) {
      alert('Контакт уже есть!!');
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
    }

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmitForm} sx={{ mt: 3 }}>
      <Typography component="label" variant="h6">
        Name
        <TextField
          type="text"
          value={name}
          onChange={handleChangeName}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          color="success"
          variant="filled"
          size="small"
          sx={{mr: 2}}
          className={css.input}
        />
      </Typography>
      <Typography component="label" variant="h6">
        Number
        <TextField
          type="tel"
          value={number}
          onChange={handleChangeNumber}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          color="success"
          variant="filled"
          size="small"
          className={css.input}
        />
      </Typography>
      <Button
        type="submit"
        disabled={!(name && number)}
        variant="contained"
        size="large"
        className={css.btn}
        sx={{ ml: 1}}
      >
        Add contact
      </Button>
    </Box>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
};
