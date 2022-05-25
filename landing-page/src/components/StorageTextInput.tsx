import React, { CSSProperties } from 'react';

interface InputProps {
    width?: CSSProperties;
    height?: string;
    styleClass?: string;
    placeholderText?: string;
    variant: string
}

class StorageTextInput extends React.Component<InputProps> {
    state = {
        value : () => {
            const saved = localStorage.getItem(this.props.variant);
            const initialValue = JSON.parse(saved || '{}');
            return initialValue || ""; 
        }
    }
    componentDidUpdate() {
        localStorage.setItem(this.props.variant, JSON.stringify(this.state.value))
    }

    render() {
        return (
            <input 
                required={true}
                minLength={this.props.variant == "password" ? 8 : 0}
                style={this.props.width} 
                type={this.props.variant} 
                className={this.props.styleClass} 
                placeholder={this.props.placeholderText}
                onChange={(e) => this.setState({value: e.target.value})}
            />
        );
    };
} 

export default StorageTextInput;