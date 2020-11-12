import React from 'react';

import './person.css';
import img from '../../assets/img/person.jpg';

const Person = () => {
  const dot = true;
  return (
    <div className="person">
      <div className="icon">
        <svg width="16" height="20" viewBox="0 0 16 20" fillRule="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2.08296V0H9V2.08296C11.8377 2.55904 14 5.027 14 8V12L16 17H11C11 18.6569 9.65685 20 8 20C6.34315 20 5 18.6569 5 17H0L2 12V8C2 5.027 4.16229 2.55904 7 2.08296ZM9 17H7C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17ZM12 12.3852V8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8V12.3852L2.95407 15H13.0459L12 12.3852Z" fill="black" />
        </svg>
        {dot && <div className="dot"></div>}
      </div>
      <img className="img" src={img} alt="img"/>
    </div>
  );
};

export default Person;