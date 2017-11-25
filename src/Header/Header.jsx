// Vendor
import React from 'react';
import glamorous from 'glamorous';

// Styles
import styles from './styles.css';

const HeaderWrapper = glamorous.div({
  background: 'black',
  height: '60px'
});

const Header = () => {
  return (
    <HeaderWrapper>
      <span className={styles.text}>tuneTrakr</span>
    </HeaderWrapper>
  );
};

export default Header;
