import { createSelector } from '@reduxjs/toolkit';
const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const contactsSelector = {
  getContacts,
  getFilter,
  getVisibleContacts,
};
