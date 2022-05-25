import React from 'react';
import { UserContext } from '../App';
import loginStyles from '../styles/loginStyles.module.css';
import Button from '../components/Button';
import StorageTextInput from '../components/StorageTextInput';

class LoginPage extends React.Component {
    render() {
        return (
            <UserContext.Consumer>
                {({setLoggedIn}) => (
                    <div>
                        <form 
                        className={loginStyles.form}
                        onSubmit={() => {
                            setLoggedIn(true);
                            localStorage.setItem('loggedIn', JSON.stringify(true));
                        }}
                        > 
                            <StorageTextInput 
                            variant='email' 
                            styleClass={loginStyles.text_input} 
                            placeholderText='Your email'
                            /> 
                            <StorageTextInput 
                            variant='password' 
                            styleClass={loginStyles.text_input} 
                            placeholderText='Your password' 
                            />
                            <Button 
                            text="Sign In" 
                            type="submit" 
                            classStyle={loginStyles.submit}
                            />
                        </form>
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
};

export default LoginPage;