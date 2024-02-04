import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import css from './Contacts/Contacts.module.css';

const Home = () => {
  return (
    <div className={css.wrapper}>
      <SectionTitle title="PHONEBOOK" />
      <p className={css.text}>
        To open your Phonebook please log in. If you do not have an account yet,
        please register.
      </p>
    </div>
  );
};

export default Home;
