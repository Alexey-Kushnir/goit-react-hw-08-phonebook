import { useSelector } from 'react-redux';
import { Section } from './Section/Section';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { getContacts } from 'reduxFiles';

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
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </Section>
    </div>
  );
};
