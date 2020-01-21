import React, {Component} from 'react';
import AthletePerson from './Athlete.js';


class AthleteApp extends Component {
    
    state = {
        persons : [
            {id: "1", name: "Max", sport: "javelin"},
            {id: "2", name: "Chris", sport: "soccer"}
        ],

        showAthlete : false
    }

    toggleAthleteHandler = () => {
        let currentAthlete = this.state.showAthlete;
        this.setState({showAthlete : !currentAthlete});        
    }

    onDeleteHandler = (personIndex) => {

        const newPersons = this.state.persons.slice();
        newPersons.splice(personIndex, 1);
        this.setState({persons : newPersons});

    }



    athletePersons = () => {
        const athList = this.state.persons.map(
            (person, index) => 
            <AthletePerson 
            athleteName = {person.name} 
            sport = {person.sport} 
            click = {() => this.onDeleteHandler(index)}
            key = {person.id}
            />
        );

        return (
            <div>
                {athList}
            </div>
        );
    }

    render () {

        let athletePersons = null;

        if (this.state.showAthlete)
        {
           /*athletePersons = (
                <div>
                    {
                        this.state.persons.map(person => {
                                return <AthletePerson athleteName = {person.name} sport = {person.sport}>
                                </AthletePerson>
                            }
                        )
                    }
                </div>
            );*/

            athletePersons = this.athletePersons();
        }

        return (
            <div>

                <button onClick = {this.toggleAthleteHandler}>
                    ClickMe!
                </button>

                {athletePersons}

            </div>
        );
        
        
    }
}


export default AthleteApp;