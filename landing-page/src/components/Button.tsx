import React from 'react';
import { MouseEventHandler } from 'react';

type ButtonTypes = "button" | "reset" | "submit" | undefined

interface InputProps {
    text: string,
    type: ButtonTypes,
    classStyle: string,
    onClick?: MouseEventHandler,
}

class SubmitButton extends React.Component<InputProps> { 
    render() {
    return (
        <button 
            type={this.props.type}
            className={this.props.classStyle}
            onClick={this.props.onClick}
        >
            {this.props.text}
        </button>
    );
    }
};


export default SubmitButton;