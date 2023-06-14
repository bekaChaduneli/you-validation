import React, { useState } from "react";
import Login from "../Validation/Login";
import Register from "../Validation/Register";
import styles from "./Form.module.css";
export default function Form({ setJoinedUser }) {
    const [activeForm, setActiveForm] = useState("login");
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
                    activeForm={activeForm}
                    setActiveForm={setActiveForm}
                    setNewUserInfo={setNewUserInfo}
                />
            ) : (
                activeForm === "login" && (
                    <Login
                        setActiveForm={setActiveForm}
                        setJoinedUser={setJoinedUser}
                    />
                )
            )}
        </div>
    );
}
