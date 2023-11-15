import React, { useEffect, useState } from 'react';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/Contacts';
import { Layout, TitleH1, TitleH2 } from 'Layout';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <React.Fragment>
      <Layout>
        <TitleH1>Phonebook</TitleH1>
        <Phonebook onAddContact={addContact} />
      </Layout>
      {contacts.length > 0 && (
        <Layout>
          <TitleH2>Contacts</TitleH2>
          <Filter inputValue={filter} onFilter={filterValue} />
          <ContactsList
            contacts={visibleItems}
            onDeleteContact={deleteContact}
          />
        </Layout>
      )}
    </React.Fragment>
  );
};
