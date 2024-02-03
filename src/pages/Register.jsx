import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';

import css from './Contacts/Contacts.module.css';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
const Register = () => {
  return (
    <div className={css.wrapper}>
      <SectionTitle title="Registration" />
      <RegisterForm />
    </div>
  );
};

export default Register;
