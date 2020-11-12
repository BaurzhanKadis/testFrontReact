import React from "react";

import "./items-lessons.css";

const ItemsLessons = ({ itemLessons, hendleItemLesson, active }) => {
  console.log(itemLessons)
  return (
    <div className="items-lessons_container">
      {itemLessons.map((item) => {
        return (
          <div key={item.id} className={`item-lesson ${item.active ? "item-lesson-active":"ttt"}`} onClick={()=>hendleItemLesson(item.id)}>
            <span className="item-lesson_date-time">
              <span className="date">{item.date}</span>
              <span className="time">{item.time}</span>
            </span>
            <span className="item-lesson_title">{item.title}</span>
            <span className="item-lesson_count">
              {!item.hw && <svg style={{marginRight: "12px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 6V12H17V14H13H11V12V6H13Z" fill="#697077"/>
              </svg>}
              {item.count}
            </span>
            {item.hw ? (
              <span className="item-lesson_hwtrue"></span>
            ) : (
              <span className="item-lesson_hwfalse">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0L20 18H0L10 0ZM3.39903 16H16.601L10 4.11825L3.39903 16ZM11 12H9V9H11V12ZM11 15H9V13H11V15Z" fill="#DA1E28"/>
                </svg>
                <span>Домашнее задание не выполнено</span>
              </span>
            )}
          </div>
        );
      })}
      <div className={active ? "modalGrey":""}></div>
    </div>
  );
};

export default ItemsLessons;
