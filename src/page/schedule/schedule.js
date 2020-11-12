import React from 'react';

import Info from '../../components/info';
import ItemsLessons from '../../components/items-lessons';
import Modal from '../../components/modal';

import './schedule.css';

class Schedule extends React.Component {
  state = {
    itemLessons: [
      {
        id: 1,
        date: "пн, 12 октября",
        time: "9:00-10:00",
        title: "Hobbies",
        count: "Начнется через 8:32:47",
        hw: false,
        active: false
      },
      {
        id: 2,
        date: "чт, 15 октября",
        time: "9:00-10:00",
        title: "Time",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 3,
        date: "чт, 15 октября",
        time: "9:00-10:00",
        title: "Sleep",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 4,
        date: "пт, 16 октября",
        time: "9:00-10:00",
        title: "Music",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 5,
        date: "сб, 17 октября",
        time: "9:00-10:00",
        title: "First Dates",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 6,
        date: "вс, 18 октября",
        time: "9:00-10:00",
        title: "Work",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 7,
        date: "пн, 19 октября",
        time: "9:00-10:00",
        title: "Risk",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 8,
        date: "вт, 20 октября",
        time: "9:00-10:00",
        title: "Food",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 9,
        date: "ср, 21 октября",
        time: "9:00-10:00",
        title: "Work",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 10,
        date: "чт, 22 октября",
        time: "9:00-10:00",
        title: "Risk",
        count: "",
        hw: true,
        active: false
      },
      {
        id: 11,
        date: "пт, 23 октября",
        time: "9:00-10:00",
        title: "Food",
        count: "",
        hw: true,
        active: false
      },
    ],
    active: false,
    homeWork: [
      {id: 1, title: "Lorem ipsum dolor sit amet", active: false},
      {id: 2, title: "Lorem ipsum dolor sit amet", active: false},
      {id: 3, title: "Lorem ipsum dolor sit amet", active: false},
      {id: 4, title: "Lorem ipsum dolor sit amet", active: false},
    ]
  };

  hendleItemLesson = (id) => {
    this.setState(({ itemLessons }) => {
      const idx = itemLessons.findIndex((el) => el.id === id);
      const oldItem = itemLessons[idx];
      const newItem = { ...oldItem, active: !oldItem.active };
      const newArray = [ 
        ...itemLessons.slice(0, idx),
        newItem,
        ...itemLessons.slice(idx + 1)
      ];
      return {
        itemLessons: newArray
      }
    })
    this.setState({
      active: !this.state.active
    })
  };

  hendleHomeWork = (id) => {
    this.setState(({ homeWork }) => {
      const idx = homeWork.findIndex((el) => el.id === id);
      const oldItem = homeWork[idx];
      const newItem = { ...oldItem, active: !oldItem.active };
      const newArray = [ 
        ...homeWork.slice(0, idx),
        newItem,
        ...homeWork.slice(idx + 1)
      ];
      return {
        homeWork: newArray
      }
    })
  }

  render() {
    const doneCount = this.state.homeWork.filter((el) => el.active).length;
    return (
      <div className="schedule_container">
        <Info />
        <ItemsLessons active={this.state.active} itemLessons={this.state.itemLessons} hendleItemLesson={this.hendleItemLesson}/>
        <Modal doneCount={doneCount} homeWork={this.state.homeWork} hendleHomeWork={this.hendleHomeWork} active={this.state.active}/>
      </div>
    );
  }
  
};

export default Schedule;