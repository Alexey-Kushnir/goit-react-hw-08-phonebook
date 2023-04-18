import { useSelector } from 'react-redux';
import { List } from './ContactsList.styled';
import { Contact } from 'components/ContactItem/ContactItem';
import { selectVisibleContacts } from 'reduxFiles';

// const getVisibleContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const ContactsList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // const visibleContacts = getVisibleContacts(contacts, filter);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(({ id, name, phone }) => {
            return <Contact key={id} id={id} name={name} phone={phone} />;
          })}
        </List>
      )}
    </>
  );
};
