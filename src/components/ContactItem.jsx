import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'reduxFiles';
import { Button, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} was deleted.`);
  };

  return (
    <li>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '22px',
            fontWeight: 'normal',
          }}
        >
          {name}: {number}
        </Typography>
        <Button
          onClick={handleDelete}
          variant="contained"
          size="small"
          color="secondary"
          sx={{
            fontSize: '10px',
            fontWeight: 'normal',
            marginLeft: 'auto',
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
