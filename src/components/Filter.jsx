import { useDispatch } from 'react-redux';
import { setFilter } from 'reduxFiles';
import { useFilter } from 'hooks';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useFilter();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <TextField
        label="Find contacts by name"
        size="small"
        sx={{ height: 22, fontSize: 16, mb: '15px', minWidth: '352px' }}
        variant="outlined"
        type="text"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};
