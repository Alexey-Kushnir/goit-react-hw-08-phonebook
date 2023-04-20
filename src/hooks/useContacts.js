import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'reduxFiles';

export const useContacts = () => {
  return useSelector(selectVisibleContacts);
};
