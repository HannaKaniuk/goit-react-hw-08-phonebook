import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};
