import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Contact } from './Contact';

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  if (contacts) {
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.list}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
  }
};

ContactList.protoType = {
  onClick: PropTypes.func.isRequired,
};
