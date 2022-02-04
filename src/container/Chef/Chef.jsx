import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Owner's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">As I am very fond of various food cuisines, </p>
        </div>
        <p className="p__opensans"> Hence I believe that we enhance and educate the palate with the freshest ingredients and flavors, while surprising and exciting each foodie with personal care and service.</p>
      </div>

      <div className="app__chef-sign">
        <p>Darshan Joshi</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;