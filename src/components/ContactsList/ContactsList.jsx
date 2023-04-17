import { useSelector } from 'react-redux';
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
  const visibleContacts = getVisibleContacts(contacts.items, filter);

  return (
    <>
      {contacts.items.length > 0 && (
        <ul style={{ listStyle: 'none' }}>
          {visibleContacts.map(({ id, name, phone }) => {
            return <Contact key={id} id={id} name={name} phone={phone} />;
          })}
        </ul>
      )}
    </>
  );
};
