import React from 'react';

type objectProps = {
    value: number,
    label: string,
}

interface InputProps {
    classStyle?: string,
    required?: boolean,
    options: Array<objectProps>,
}

class CheckBox extends React.Component<InputProps> {
    render() {
    return(
    <div>
        {this.props.options.map((a: objectProps) => (
        <label>
            <input 
            type="checkbox" 
            name="checkbox" 
            className={this.props.classStyle}
            />
            {a.label}
        </label>
        ))} 
    </div>
    )
        }
};

export default CheckBox;