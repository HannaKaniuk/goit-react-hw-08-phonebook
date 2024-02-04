import css from './SectionSubtitle.module.css';
import { BsBookHalf } from 'react-icons/bs';
export const SectionSubtitle = ({ subtitle, children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.subtitle}>
        <BsBookHalf className={css.subtitleIcon} />
      </h1>
      {children}
    </section>
  );
};
