import { useDispatch } from 'react-redux';
import { FilterTitle, FilterInput } from './Filter.styled';
import { setFilter } from 'reduxFiles';
import { useFilter } from 'hooks';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectFilter);
  const filter = useFilter();

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
