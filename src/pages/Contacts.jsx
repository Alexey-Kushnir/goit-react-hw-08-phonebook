import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { Section } from 'components/Section';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <>
          {error && <p>{error}</p>}
          {contacts.length > 0 && (
            <>
              <Filter />
              {isLoading && !error ? (
                <Typography variant="h6" sx={{ m: '40px 0' }}>
                  Loading contacts...
                </Typography>
              ) : (
                <ContactsList />
              )}
            </>
          )}
        </>
      </Section>
    </div>
  );
}
