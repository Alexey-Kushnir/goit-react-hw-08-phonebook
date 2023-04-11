import { useSelector } from 'react-redux';

import { Section } from './Section/Section';
import { ContactsInput } from './ContactsInput/ContactsInput';
import { ContactsStorage } from './ContactsStorage/ContactsStorage';
import { Filter } from './Filter/Filter';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <ContactsInput />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter />
            <ContactsStorage />
          </>
        )}
      </Section>
    </div>
  );
};
