import React from 'react';

import ProgressBar from '../progress-bar';

import './info.css';
import foto from '../../assets/img/tina.jpg';

const infoItem = [
  {
    type: "Длительность Урока",
    typeRight: "60 мин"
  },
  {
    type: "Дни занятий",
    typeRight: "Понедельник, Пятница"
  }
]
const Info = () => {
  return (
    <div className="info_container">
      <div className="info_container-top">
        <h2>Подготовка к ЕГЭ</h2>
        {infoItem.map((item,id) => {
          return <div key={id} className="infoItem-item">
            <span className="left">{item.type}</span>
            <span className="right">{item.typeRight}</span>
          </div>
        })}
        <ProgressBar />
      </div>
      <div className="info_container-buttom">
        <h2>Преподователь</h2>
        <div className="profile_prepod">
          <img className="profile_prepod-foto" src={foto} alt="foto"/>
          <span className="profile_prepod-name">Tina Edwards</span>
          <span className="profile_prepod-star">
            <svg width="98" height="18" viewBox="0 0 98 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.99975 12.9523L12.1122 14.8348C12.6822 15.1798 13.3797 14.6698 13.2297 14.0248L12.4047 10.4848L15.1572 8.09982C15.6597 7.66482 15.3897 6.83982 14.7297 6.78732L11.1072 6.47982L9.68975 3.13482C9.43475 2.52732 8.56475 2.52732 8.30975 3.13482L6.89225 6.47232L3.26975 6.77982C2.60975 6.83232 2.33975 7.65732 2.84225 8.09232L5.59475 10.4773L4.76975 14.0173C4.61975 14.6623 5.31725 15.1723 5.88725 14.8273L8.99975 12.9523Z" fill="#F1C21B"/>
              <path d="M28.9997 12.9523L32.1122 14.8348C32.6822 15.1798 33.3797 14.6698 33.2297 14.0248L32.4047 10.4848L35.1572 8.09982C35.6597 7.66482 35.3897 6.83982 34.7297 6.78732L31.1072 6.47982L29.6897 3.13482C29.4347 2.52732 28.5647 2.52732 28.3097 3.13482L26.8922 6.47232L23.2697 6.77982C22.6097 6.83232 22.3397 7.65732 22.8422 8.09232L25.5947 10.4773L24.7697 14.0173C24.6197 14.6623 25.3172 15.1723 25.8872 14.8273L28.9997 12.9523Z" fill="#F1C21B"/>
              <path d="M48.9997 12.9523L52.1122 14.8348C52.6822 15.1798 53.3797 14.6698 53.2297 14.0248L52.4047 10.4848L55.1572 8.09982C55.6597 7.66482 55.3897 6.83982 54.7297 6.78732L51.1072 6.47982L49.6897 3.13482C49.4347 2.52732 48.5647 2.52732 48.3097 3.13482L46.8922 6.47232L43.2697 6.77982C42.6097 6.83232 42.3397 7.65732 42.8422 8.09232L45.5947 10.4773L44.7697 14.0173C44.6197 14.6623 45.3172 15.1723 45.8872 14.8273L48.9997 12.9523Z" fill="#F1C21B"/>
              <path d="M68.9997 12.9523L72.1122 14.8348C72.6822 15.1798 73.3797 14.6698 73.2297 14.0248L72.4047 10.4848L75.1572 8.09982C75.6597 7.66482 75.3897 6.83982 74.7297 6.78732L71.1072 6.47982L69.6897 3.13482C69.4347 2.52732 68.5647 2.52732 68.3097 3.13482L66.8922 6.47232L63.2697 6.77982C62.6097 6.83232 62.3397 7.65732 62.8422 8.09232L65.5947 10.4773L64.7697 14.0173C64.6197 14.6623 65.3172 15.1723 65.8872 14.8273L68.9997 12.9523Z" fill="#F1C21B"/>
              <path d="M88.9997 12.9523L92.1122 14.8348C92.6822 15.1798 93.3797 14.6698 93.2297 14.0248L92.4047 10.4848L95.1572 8.09982C95.6597 7.66482 95.3897 6.83982 94.7297 6.78732L91.1072 6.47982L89.6897 3.13482C89.4347 2.52732 88.5647 2.52732 88.3097 3.13482L86.8922 6.47232L83.2697 6.77982C82.6097 6.83232 82.3397 7.65732 82.8422 8.09232L85.5947 10.4773L84.7697 14.0173C84.6197 14.6623 85.3172 15.1723 85.8872 14.8273L88.9997 12.9523Z" fill="#F1C21B"/>
            </svg>
          </span>
        </div>
        <div className="profile_prepod-button">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.47595 0 0 3.64445 0 8.14285C0 10.7504 1.50535 12.8561 3.84615 14.3469L1.9231 19L7.6923 15.8979C8.42175 16.0358 9.21905 16.2857 10 16.2857C15.5241 16.2857 20 12.6413 20 8.14285C20 3.64445 15.5241 0 10 0Z" fill="white"/>
          </svg>
          <span>Написать сообщение</span>
        </div>
      </div>
    </div>
  );
};

export default Info;