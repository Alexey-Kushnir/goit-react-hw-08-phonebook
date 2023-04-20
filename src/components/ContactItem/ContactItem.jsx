import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactItem, DeleteButton } from './ContactsItem.styled';
import { deleteContact } from 'reduxFiles';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log('del id:', id);

    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      {name}: {phone}
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
