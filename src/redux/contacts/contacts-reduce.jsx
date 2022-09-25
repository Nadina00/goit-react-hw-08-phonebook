import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {fetchContactsRequest, fetchContactsSuccess, fetchContactsError, changeFilter, addContactsSuccess, deleteContactsSuccess, addContactsRequest, addContactsError, deleteContactsRequest, deleteContactsError} from './contats-actions'

const items = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactsSuccess]: (state, {payload}) => [...state, payload],
    [deleteContactsSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload),
})
const loading = createReducer([], {
    [fetchContactsRequest]: ()=> true,
    [fetchContactsSuccess]:() => false,
    [fetchContactsError]: () => false,

    [addContactsRequest]: () => true,
    [addContactsSuccess]: () => false,
    [addContactsError]: () => false,

    [deleteContactsSuccess]: ()=> false,
    [deleteContactsRequest]: () => true,
    [deleteContactsError]: () => false
})
    const filter = createReducer('', {
        [changeFilter]: (_, { payload }) => payload,
      });
      export default combineReducers({
        items,
        filter,
        loading
        
      });      