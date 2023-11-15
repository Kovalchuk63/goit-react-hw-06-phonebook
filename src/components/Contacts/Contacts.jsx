import React from 'react';
import { Button, ListItem } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispath = useDispatch();
  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <React.Fragment>
      <ul>
        {visibleItems.map(({ name, number, id }) => (
          <ListItem key={id}>
            <div>
              <span>{name}: </span>
              <span>{number} </span>
            </div>
            <Button onClick={() => dispath(deleteContact(id))}>Delete</Button>
          </ListItem>
        ))}
      </ul>
    </React.Fragment>
  );
};
