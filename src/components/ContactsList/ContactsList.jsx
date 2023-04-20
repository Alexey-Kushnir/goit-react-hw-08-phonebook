// import { useSelector } from 'react-redux';
import { useContacts } from 'hooks';
import { List } from './ContactsList.styled';
import { Contact } from 'components/ContactItem/ContactItem';
// import { selectVisibleContacts } from 'reduxFiles';

export const ContactsList = () => {
  // const visibleContacts = useSelector(selectVisibleContacts);

  const visibleContacts = useContacts();

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
