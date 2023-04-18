import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from './Section/Section';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import {
  selectContacts,
  fetchContacts,
  selectIsLoading,
  selectError,
} from 'reduxFiles';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        <>
          {isLoading && !error && <p>Loading contacts...</p>}
          {error && <p>{error}</p>}
          {contacts.length > 0 && (
            <>
              <Filter />
              <ContactsList />
            </>
          )}
        </>
      </Section>
    </div>
  );
};
