import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactsFilter } from '../components/Filter/Filter';
import css from './App.module.css';

import { useGetContactsQuery } from '../redux/services';
export const App = () => {
  const { error, isLoading } = useGetContactsQuery();
  return (
    <div className={css.container}>
      <div className={css.content}>
        <NotificationContainer />
        <h1 className={css.title1}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title2}>Contacts</h2>
        <h3 className={css.title3}>Find contacts by name</h3>
        <ContactsFilter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </div>
  );
};
