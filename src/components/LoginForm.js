import styles from "./LoginForm.module.css";

export default function LoginForm() {
    return (
        <form className={styles.form}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type="text"
                id="name"
            />
            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password"
                id="password"
            />
            <button className={styles.submit}
                type="submit"
            >Submit</button>
        </form>
    );
}