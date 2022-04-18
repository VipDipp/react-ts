import React, { FC } from 'react';

interface InputProps {
    type: string,
    classStyle?: string,
    placeholder?: string,
    required?: boolean
}

const TextInput: FC<InputProps> = 
({
    type,
    classStyle,
    placeholder,
    required
}) => {
    return (
        <input 
            className={classStyle}
            placeholder={placeholder}
            type={type}
            required={required}
        />
    );
};

export default TextInput;