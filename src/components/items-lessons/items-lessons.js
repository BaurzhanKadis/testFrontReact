import React, { useEffect, useState } from "react";

import "./items-lessons.css";

const itemLessons = [
  {
    date: "пн, 12 октября",
    time: "9:00-10:00",
    title: "Hobbies",
    count: "Начнется через 8:32:47",
    hw: false,
  },
  {
    date: "чт, 15 октября",
    time: "9:00-10:00",
    title: "Time",
    count: "",
    hw: true,
  },
  {
    date: "чт, 15 октября",
    time: "9:00-10:00",
    title: "Sleep",
    count: "",
    hw: true,
  },
  {
    date: "пт, 16 октября",
    time: "9:00-10:00",
    title: "Music",
    count: "",
    hw: true,
  },
  {
    date: "сб, 17 октября",
    time: "9:00-10:00",
    title: "First Dates",
    count: "",
    hw: true,
  },
  {
    date: "вс, 18 октября",
    time: "9:00-10:00",
    title: "Work",
    count: "",
    hw: true,
  },
  {
    date: "пн, 19 октября",
    time: "9:00-10:00",
    title: "Risk",
    count: "",
    hw: true,
  },
  {
    date: "вт, 20 октября",
    time: "9:00-10:00",
    title: "Food",
    count: "",
    hw: true,
  },
  {
    date: "ср, 21 октября",
    time: "9:00-10:00",
    title: "Work",
    count: "",
    hw: true,
  },
  {
    date: "чт, 22 октября",
    time: "9:00-10:00",
    title: "Risk",
    count: "",
    hw: true,
  },
  {
    date: "пт, 23 октября",
    time: "9:00-10:00",
    title: "Food",
    count: "",
    hw: true,
  },
];
const ItemsLessons = () => {
  return (
    <div className="items-lessons_container">
      {itemLessons.map((item, id) => {
        return (
          <div key={id} className="item-lesson">
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
    </div>
  );
};

export default ItemsLessons;
