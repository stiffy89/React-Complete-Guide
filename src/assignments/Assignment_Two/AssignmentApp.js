import React, {Component} from 'react';
import Validation from './Validation.js.js';
import CharComponent from './CharComponent.js.js';

class AssignmentAppTwo extends Component {

    state = {
        text : ""
    }

    InputFieldComponent = () => {
        return (
            <div>
                <input placeholder = "type text here" onChange = {this.onInputChange}>
                </input>
            </div>
        )
    }

    onInputChange = (event) => {
        
        this.setState (
            { text : event.target.value}
        );
    }

    onDestroyItem = (letterIndex) => {
        let letters = this.state.text.split('');
        letters.splice(letterIndex,1);
        const updateText = letters.join('');
        this.setState(
            {text : updateText}
        );
    }

    render ()
    {

        var stringArr = this.state.text.split('');
        const charList = stringArr.map(
            (char, index) => {
                return <CharComponent
                selectedLetter = {char}
                key = {index}
                clicked = {() => this.onDestroyItem(index)}
                />;
            }
        );

        return (
            <div>
                {this.InputFieldComponent()}

                <p>
                    {this.state.text}
                </p>
                <div>
                    <Validation 
                    enteredText = {this.state.text}
                    textLength = {this.state.text.length}
                    />
                </div>
                <div>
                    {charList}
                </div>
            </div>
        )
    }
}

export default AssignmentAppTwo;