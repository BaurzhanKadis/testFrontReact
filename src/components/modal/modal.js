import React from 'react';

import './modal.css';
import img1 from '../../assets/img/111.png';
import img2 from '../../assets/img/222.jpg';
import img3 from '../../assets/img/333.jpg';

const Modal = ({ active, homeWork, hendleHomeWork, doneCount }) => {
  return (
    <div className={`modal-container ${active ? "modal-container-active" : ""}`}>
      <div className="modal_top">
        <h2>Restaurants</h2>
        <span>Курс “Подготовка к ЕГЭ” (2/18)</span>
      </div>
      <div className="modal_description">
        <h4>Описание</h4>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus...</span>
        <a href="#">Читать полностью</a>
      </div>
      <div className="modal_material">
        <h4>Материалы</h4>
        <div className="modal_material-video">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#4F7FFF" fill-opacity="0.1"/>
            <path d="M26 12L27.82 15.64C27.9 15.8 27.78 16 27.6 16H25.62C25.24 16 24.89 15.79 24.73 15.45L23 12H21L22.82 15.64C22.9 15.8 22.78 16 22.6 16H20.62C20.24 16 19.89 15.79 19.73 15.45L18 12H16L17.82 15.64C17.9 15.8 17.78 16 17.6 16H15.62C15.24 16 14.89 15.79 14.72 15.45L13 12H12C10.9 12 10 12.9 10 14V26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V13C30 12.45 29.55 12 29 12H26Z" fill="#4F7FFF"/>
          </svg>
          <span>cannibalholocaust.mkv</span>
        </div>
        <div className="images">
          <img src={img1} alt="images"/>
          <img src={img2} alt="images"/>
          <img src={img3} alt="images"/>
        </div>
      </div>
      <div className="modal_homework">
        <h4>Домашнее задание</h4>
        <span>Выполнено {doneCount}/4</span>
        {homeWork.map((item) => {
          return <div key={item.id} className="homework_item" onClick={()=>hendleHomeWork(item.id)}>
            <span className={`icon ${item.active ? "icon-active" : ""}`}>
              <span></span>
            </span>
            <span>{item.title}</span>
          </div>
        })}
      </div>
      <div className="profile_prepod-button modal_button">
        <span>Продолжить выполнение</span>
      </div>
    </div>
  );
};

export default Modal;