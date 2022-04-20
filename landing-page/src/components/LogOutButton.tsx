import { useUserContext } from '../App';
import loginStyles from '../styles/loginStyles.module.css';

const LogOutButton = () => {
    const { setLoggedIn } = useUserContext();
    return (
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
    );
};

export default LogOutButton;