import css from './ContactForm.module.css';
import { NotificationManager } from 'react-notifications';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const objUserData = Object.fromEntries(new FormData(evt.target));
    const contactExists = contacts.some(contact => contact.name.toLowerCase());
    if (contactExists.includes(objUserData.name.toLowerCase())) {
      NotificationManager.info(`${objUserData.name} is already in contacts.`);
      return;
    }
    addContact(objUserData);
    evt.target.reset();
  };
  return (
    <form className={css.formContact} onSubmit={handleFormSubmit}>
      <label htmlFor="nameInput" className={css.labelInput}>
        Name
      </label>
      <input
        type="text"
        name="name"
        id="nameInput"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.inputContact}
        autoComplete="name"
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
        autoComplete="tel"
      />
      <button type="submit" className={css.buttonContact}>
        Add Contact
      </button>
    </form>
  );
};
