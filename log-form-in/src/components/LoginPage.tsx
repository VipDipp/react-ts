import React, { FC } from 'react';
import { useUserContext } from '../App';
import styles from '../styles/styles.module.css';
import SubmitButton from './SubmitButton';
import TextInput from './TextInput';

const LoginPage:FC = () => {
    const { loggedIn, setLoggedIn } = useUserContext();
    
    return (
        <div>
            <form 
            className={styles.form}
            onSubmit={() => {
                setLoggedIn(true);
                localStorage.setItem('loggedIn', JSON.stringify(true));
            }}
            > 
                <TextInput 
                variant='email' 
                styleClass={styles.text_input} 
                placeholderText='Your email'
                /> 
                <TextInput 
                variant='password' 
                styleClass={styles.text_input} 
                placeholderText='Your password' 
                />
                <SubmitButton/>
            </form>
        </div>
    );
};

export default LoginPage;