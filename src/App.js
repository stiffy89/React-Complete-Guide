import React, { Component } from 'react';
import Person from './Person/Person.js';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    persons : [
      {name: 'max', age: 28},
      {name: 'james', age: 29},
      {name: 'matthew', age: 31},
      {name: 'christian', age: 40}
    ],

    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
        persons : [
          {name: 'max', age: 28},
          {name: event.target.value, age:29}
        ]
     })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const personCount = this.state.persons;
    personCount.splice(index, 1);
    this.setState({
      persons : personCount
    });
  }

  render() {

    let persons = null;
    let classes = [];

    if (this.state.persons.length <= 2)
    {
      classes.push('red');
    }

    if (this.state.persons.length <= 1)
    {
      classes.push('bold');
    }
    
    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) =>{
              return <Person 
              name={person.name}
              age={person.age}
              click = {() => this.deletePersonHandler(index)}
              key = {person.name + person.age}
              />
            })}
          </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>

        <button className="button" onClick = {this.togglePersonsHandler}>
          Click Me!
        </button>

        {persons}

      </div>
    );

   
  }
}

export default App;
