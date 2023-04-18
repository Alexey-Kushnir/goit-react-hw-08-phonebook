import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  InputName,
  InputValue,
  SubmitButton,
} from './ContactsForm.styled';
import { selectContacts, addContact } from 'reduxFiles';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    if (contacts.length > 0) {
      if (
        contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        return alert(`${name} is already in contacts.`);
      }
    }

    dispatch(addContact({ name, phone }));
    return resetForm();
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
      <Container autoComplete="off">
        <InputName htmlFor={'name'}>Name</InputName>
        <InputValue
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <InputName htmlFor={'phone'}>Phone</InputName>
        <InputValue
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitButton type="submit">Ad contact</SubmitButton>
      </Container>
    </Formik>
  );
};
