import React, { PureComponent } from 'react';
import Person from './Person/Person.js';

//pure component is a normal component which IMPLEMENTS (shouldComponentUpdate())
//and checks all the components for property changes without the need for it to be specified

class Persons extends PureComponent {

  render () {

    return this.props.persons.map( (person, index) => {

      return <Person
    
        name={person.name}
        age={person.age}
        click = {() => this.props.clicked(index)}
        key = {person.name + person.age}
    
      />
    
    });

  }
}




export default Persons;