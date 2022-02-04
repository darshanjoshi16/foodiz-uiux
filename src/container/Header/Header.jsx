import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Abode To Feed Foodie Tummy 💕</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>At Foodiz, We like people who love to eat. They’re the best kind of people in the world 👌 </p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
