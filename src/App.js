import React, { Component } from 'react';
import './App.css'
import CurrentDate from './components/Date/CurrentDate';
import Task from './components/Task/Task';
/* Class Component - App */
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-container'>
          {/* Stateless Component - CurrentDate*/}
          <CurrentDate />
          {/* Functional component with hooks - Task */}
          <Task />
        </div>
      </div>
    )

  }
}
