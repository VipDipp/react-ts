import React from 'react';
import { UserContext } from '../App';
import loginStyles from '../styles/loginStyles.module.css';

class LogOutButton extends React.Component {
    render() {
    return (
        <UserContext.Consumer>
        {({setLoggedIn}) => (
        <button
            type="button"
            className={loginStyles.logout}
            onClick={() => {
                localStorage.setItem("loggedIn", JSON.stringify(false));
                localStorage.setItem("email", "{}");
                localStorage.setItem("password", "{}");
                setLoggedIn(false);
            }}
        > 
            Log out
        </button>
        )}
        </UserContext.Consumer>
    );
    }
};

export default LogOutButton;