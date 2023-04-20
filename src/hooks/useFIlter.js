import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxFiles';

export const useFilter = () => {
  return useSelector(selectFilter);
};
