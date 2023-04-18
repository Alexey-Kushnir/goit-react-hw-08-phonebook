import { useDispatch, useSelector } from 'react-redux';
import { FilterTitle, FilterInput } from './Filter.styled';
import { selectFilter, setFilter } from 'reduxFiles';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterTitle>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterTitle>
  );
};
