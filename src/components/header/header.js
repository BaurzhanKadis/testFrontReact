import React from 'react';
import {Link} from 'react-router-dom'
import Person from '../person';

import './header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">logo</Link>
      </div>
      <nav className="nav-items">
        <Link className="nav-item" to="/schedule">Мое расписание</Link>
        <Link className="nav-item" to="/dictionary">Мой словарь</Link>
        <Link className="nav-item" to="/courses">Мои курсы</Link>
        <Link className="nav-item" to="/useful">Полезное</Link>
      </nav>
      <Person />
    </header>
  );
};

export default Header;