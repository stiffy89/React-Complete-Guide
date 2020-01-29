import React, { Component } from 'react';
import Persons from'../components/Persons/Persons.js';
import Cockpit from '../components/cockpit/cockpit.js'

import AuthContext from '../context/auth-context.js';

import './App.css';

class App extends Component {

  state = {
    persons : [
      {name: 'max', age: 21},
      {name: 'james', age: 29},
      {name: 'matthew', age: 31},
      {name: 'christian', age: 40}
    ],

    showPersons: false,

    //demonstration for setState
    changeCounter: 0
  }

  nameChangeHandler = (event) => {

    //this syntax will guarentee us that we will use the old state
    this.setState((prevState, props) => {
        return {
          persons : [
            {name: 'max', age: 28},
            {name: event.target.value, age:29}
          ],
  
          changeCounter: prevState.changeCounter + 1
        }
     })
  }

  togglePersonsHandler = () => {
    console.log("toggle clicked");
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
            <Persons
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
            />
          </div>
        );
    }

    return (
      
      <div className="App">
          <button>
          Remove Cockpit
          </button>
        <AuthContext.Provider value = {{
          authenticated: this.state.authenticated, 
          login: this.loginHandler
          }}>
          <Cockpit
            togglePersonsHandler = {this.togglePersonsHandler}
          >

          </Cockpit>
        </AuthContext.Provider>

        {persons}
      </div>
    );
  }
}

export default App;
