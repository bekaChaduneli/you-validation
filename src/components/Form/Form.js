import React, { useState } from "react";
import Login from "../Validation/Login";
import Register from "../Validation/Register";
import styles from "./Form.module.css";
export default function Form() {
    const [activeForm, setActiveForm] = useState("register");
    const [newUserInfo, setNewUserInfo] = useState();

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
            {activeForm === "register" ? (
                <Register
                    setActiveForm={setActiveForm}
                    setNewUserInfo={setNewUserInfo}
                />
            ) : (
                activeForm === "login" && (
                    <Login
                        setNewUserInfo={setNewUserInfo}
                        setActiveForm={setActiveForm}
                    />
                )
            )}
        </div>
    );
}
