import { useRef } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";
export default function Input({ placeholder, type, error, onBlur, id }) {
    return (
        <div className={styles.Validation__Form__InputWrapper}>
            <input
                placeholder={placeholder}
                onBlur={onBlur}
                type={type}
                id={id}
                className={
                    error
                        ? classNames(styles.Validation__Form__Input, {
                              [styles["Validation__Form__Input--error"]]: error,
                          })
                        : styles.Validation__Form__Input
                }
            />
            {error ? (
                <p className={styles.Validation__Form__ErrorText}>{error}</p>
            ) : (
                ""
            )}
        </div>
    );
}
