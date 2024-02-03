import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from '../../redux/auth/operations';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosPersonAdd } from 'react-icons/io';
import { IoMdMailUnread } from 'react-icons/io';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(event);
    console.log(form.elements.name.value);
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form
      className={css.form_wrapper}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        <IoIosPersonAdd className={css.iconUser} />
        Username
        <input
          className={css.input}
          type="text"
          name="name"
          minLength={2}
          required
        />
      </label>
      <label className={css.label}>
        <IoMdMailUnread className={css.iconMail} />
        Email
        <input className={css.input} type="email" name="email" required />
      </label>

      <label className={css.label}>
        <RiLockPasswordFill className={css.iconPassword} />
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          minLength={5}
          required
        />
      </label>
      <button className={css.button_add} type="submit">
        Register
      </button>
    </form>
  );
};
