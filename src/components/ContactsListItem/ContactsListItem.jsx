import css from './ContactsListItem.module.css';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
export const ContactsListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contactListItem}>
      {<FaRegUser className={css.iconTel} />}
      {name}: {number}{' '}
      <button
        className={css.button_delete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        {<RiDeleteBack2Fill className={css.icon} />}
      </button>
    </li>
  );
};
