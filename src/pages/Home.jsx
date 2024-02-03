import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import css from './Contacts/Contacts.module.css';
import { FcTwoSmartphones } from 'react-icons/fc';
const Home = () => {
  return (
    <div className={css.wrapper}>
      <FcTwoSmartphones className={css.icon} />
      <SectionTitle title="Phonebook Application" />
      <p className={css.text}>
        To open your Phonebook please log in. If you do not have an account yet,
        please register.
      </p>
    </div>
  );
};

export default Home;
