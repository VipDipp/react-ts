import { useUserContext } from '../App';
import styles from '../styles/styles.module.css';

const LogOutButton = () => {
    const { setLoggedIn } = useUserContext();
    return (
        <button
            type="button"
            className={styles.logout}
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