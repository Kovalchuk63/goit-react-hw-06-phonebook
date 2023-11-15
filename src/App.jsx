import React from 'react';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/Contacts';
import { Layout, TitleH1, TitleH2 } from 'Layout';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <React.Fragment>
      <Layout>
        <TitleH1>Phonebook</TitleH1>
        <Phonebook />
      </Layout>
      {contacts.length > 0 && (
        <Layout>
          <TitleH2>Contacts</TitleH2>
          <Filter />
          <ContactsList />
        </Layout>
      )}
    </React.Fragment>
  );
};
