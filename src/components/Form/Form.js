import React, { useEffect, useState } from "react";
import Login from "../Validation/Login";
import Register from "../Validation/Register";
import styles from "./Form.module.css";
export default function Form() {
    const [activeForm, setActiveForm] = useState("login");
    const [newUserInfo, setNewUserInfo] = useState();
    const [valid, setValid] = useState(false);
    const [errors, setErrors] = useState("");

    useEffect(() => {
        // activeForm === "register" && valid ? setActiveForm("login") : "";
    }, [valid]);
    useEffect(() => {
        console.log(errors);
    }, [errors]);
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
                    valid={valid}
                    setValid={setValid}
                    setActiveForm={setActiveForm}
                    setNewUserInfo={setNewUserInfo}
                    errors={errors}
                    setErrors={setErrors}
                />
            ) : (
                activeForm === "login" && (
                    <Login
                        valid={valid}
                        setNewUserInfo={setNewUserInfo}
                        setValid={setValid}
                        errors={errors}
                        setActiveForm={setActiveForm}
                        setErrors={setErrors}
                    />
                )
            )}
        </div>
    );
}
