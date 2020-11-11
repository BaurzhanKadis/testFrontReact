import React from 'react';

import Info from '../../components/info';
import ItemsLessons from '../../components/items-lessons';

import './schedule.css';

const Schedule = () => {
  return (
    <div className="schedule_container">
      <Info />
      <ItemsLessons />
    </div>
  );
};

export default Schedule;