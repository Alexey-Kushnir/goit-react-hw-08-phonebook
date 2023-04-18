import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from './Section/Section';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { getContacts, fetchContacts, getIsLoading, getError } from 'reduxFiles';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          {items.length > 0 && (
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
