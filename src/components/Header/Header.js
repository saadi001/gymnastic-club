import React from 'react';
import './Header.css';
import { faDumbbell,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
     return (
          <div>
               <h1><FontAwesomeIcon icon={faDumbbell}/><span className='title'>Saadi's Gymnastic Club</span></h1>
               <h3>Select Today's Boost</h3>
          </div>
     );
};

export default Header;