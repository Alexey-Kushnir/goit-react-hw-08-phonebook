import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import {
  selectContacts,
  fetchContacts,
  selectIsLoading,
  selectError,
} from 'reduxFiles';

export default function Contacts() {
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
}
