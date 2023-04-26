import { useContacts } from 'hooks';
import { List } from './ContactsList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = () => {
  const visibleContacts = useContacts();

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </List>
      )}
    </>
  );
};
