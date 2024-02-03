import css from './ContactForm.module.css';
import { NotificationManager } from 'react-notifications';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactExists) {
      NotificationManager.info(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  return (
    <form
      // ref={inputForm}
      className={css.formContact}
      onSubmit={handleSubmit}
    >
      <label htmlFor="nameInput" className={css.labelInput}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.inputContact}
        onChange={handleChange}
      />
      <label htmlFor="phoneInput" className={css.labelInput}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="phoneInput"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.inputContact}
      />
      <button type="submit" className={css.buttonContact}>
        Add Contact
      </button>
    </form>
  );
};
