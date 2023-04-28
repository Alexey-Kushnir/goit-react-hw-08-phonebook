// import { Formik } from 'formik';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, addContact } from 'reduxFiles';
import { Button, TextField } from '@mui/material';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },

    onSubmit: ({ name, number }, { resetForm }) => {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return alert(`${name} is already in contacts.`);
      }
      dispatch(addContact({ name, number }));
      return resetForm();
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <TextField
          label="Name"
          size="small"
          sx={{ height: 22, fontSize: 16, mb: '20px', minWidth: '352px' }}
          variant="outlined"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          label="Phone"
          size="small"
          sx={{ height: 22, fontSize: 16, mb: '20px', minWidth: '352px' }}
          type="tel"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{
            fontSize: '14px',
            marginLeft: '10px',
            fontWeight: 'bold',
            ml: 0,
          }}
        >
          Add contact
        </Button>
      </form>
    </>
  );
};
