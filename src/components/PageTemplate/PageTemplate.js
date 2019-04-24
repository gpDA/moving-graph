import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
  return (
    <div className={cx('page-template')}>
    {/* title */}
      <h1>MOVING TIME SERIES!</h1>
      <div className={cx('content')}>
      {/* main contents */}
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
