import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Contact, DeleteButton } from './ContactsItem.styled';
import { deleteContact } from 'reduxFiles';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Contact>
      {name}: {number}
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
