import React from 'react';
import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.loaderContainer}>
    <Oval
      visible={true}
      height="80"
      width="80"
      color="rgba(0, 255, 255, 0.8)"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
