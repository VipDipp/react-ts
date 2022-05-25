import React, { ChangeEventHandler } from 'react';

interface InputProps {
    type: string,
    classStyle?: string,
    placeholder?: string,
    required?: boolean,
    onChange?: ChangeEventHandler
}

class TextInput extends React.Component<InputProps>{
    render() {
        return (
            <input 
                className={this.props.classStyle}
                placeholder={this.props.placeholder}
                type={this.props.type}
                required={this.props.required}
                onChange={this.props.onChange}
            />
        );
    }
};

export default TextInput;