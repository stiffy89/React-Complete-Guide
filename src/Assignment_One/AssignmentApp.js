import React, {Component} from 'react';
import UserInputComponent from './UserInput.js';
import UserOutputComponent from './UserOut.js';
import ButtonComponent from './Button.js';

class AssignmentApp extends Component {

    state = {
        username : "Steven.Ernox"
    }

    onButtonClicked = () => {
        this.setState(
            {
                username : "Earl.Ernox"
            }
        )
    }

    inputHandle = (event) => {
        this.setState(
            {
                username : event.target.value
            }
        )
    }

    render()
    {
        return (
            <div>
                <p>
                    <UserOutputComponent userName = {this.state.username}/>
                </p>
                <p>
                    <ButtonComponent clicked = {this.onButtonClicked}/>
                </p>
                <p>
                    <UserInputComponent inputTyped = {this.inputHandle} initialValue={this.state.username}/>
                </p>
                
            </div>   
        )
    }
}


export default AssignmentApp;