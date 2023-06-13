import React from "react";
import styles from "./Input.module.css";
export default function Input({
    ValidText,
    FirstInputText,
    SecondInputText,
    ButtonText,
    OnSubmit,
}) {
    return (
        <div className={styles.Validation}>
            <div className={styles.xd}>
                <figure className={styles.Validation__Header__Logo}>
                    <img src="/Logo.png" />
                </figure>
                <h2 className={styles.Validation__Header__Headline}>
                    საქართველოს სახალხო დამცველი
                </h2>
            </div>
            <div className={styles.Validation__Main}>
                <h3 className={styles.Validation__Main__Headline}>
                    {ValidText}
                </h3>
                <form onSubmit={OnSubmit} className={styles.Validation__Form}>
                    <input
                        placeholder={FirstInputText}
                        type="text"
                        className={styles.Validation__Form__Input}
                    />
                    <input
                        placeholder={SecondInputText}
                        type="password"
                        className={styles.Validation__Form__Input}
                    />
                    <button
                        type="submit"
                        onClick={() => {
                            console.log("s");
                        }}
                        className={styles.Validation__Form__Submit}
                    >
                        {ButtonText}
                    </button>
                </form>
            </div>
        </div>
    );
}
