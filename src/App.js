import React, { Component } from 'react';
import './App.css'
import CurrentDate from './components/Date/CurrentDate';
import Task from './components/Task/Task';
/* Class Component - App */
export default class App extends Component {

  render() {

    let currentDate = new Date().toLocaleDateString().toString();
    let expiryDate = localStorage.getItem('expiry-date')
    
    if ( expiryDate !== currentDate) {
      localStorage.clear()
    }

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
