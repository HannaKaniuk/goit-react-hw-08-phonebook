import css from './Filter.module.css';
import { selectFilter } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';

export const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const value = event.currentTarget.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <input
      className={css.input}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
    />
  );
};
