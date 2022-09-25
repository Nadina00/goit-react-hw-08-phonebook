import axios from "axios";
import {fetchContactsRequest, fetchContactsSuccess, fetchContactsError,
     addContactsRequest, addContactsSuccess, addContactsError, deleteContactsRequest, deleteContactsSuccess,deleteContactsError } from './contats-actions'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const fetchContacts = () =>  dispatch => {
    dispatch(fetchContactsRequest());
  
    try {
      const { data } =  axios.get('/contacts');
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };

const addContact = contact => dispatch => {
  console.log(contact)
    dispatch(addContactsRequest()); 

    axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error.message)));
}; 
const deleteContact = contactId => dispatch => {
    dispatch(deleteContactsRequest());
  console.log(contactId)
    axios
      .delete(`/contacts/${contactId}`)
      .then(() => dispatch(deleteContactsSuccess(contactId)))
      .catch(error => dispatch(deleteContactsError(error.message)));
  };




  const contactsOperations = {
    fetchContacts,
    addContact, 
    deleteContact
 
  };
  export default contactsOperations;