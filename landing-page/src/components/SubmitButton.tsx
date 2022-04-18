import styles from '../styles/styles.module.css'

const SubmitButton = () => {
    return (
        <button 
            type="submit" 
            className={styles.submit}
        >Submit</button>
    );
};

export default SubmitButton;