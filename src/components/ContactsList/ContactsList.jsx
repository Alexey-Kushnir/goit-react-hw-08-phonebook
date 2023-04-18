import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import { Contact } from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'reduxFiles';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      {contacts.length > 0 && (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            return <Contact key={id} id={id} name={name} phone={phone} />;
          })}
        </List>
      )}
    </>
  );
};
