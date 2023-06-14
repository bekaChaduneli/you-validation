import React, { useState } from "react";
import styles from "./Validation.module.css";
import Cookies from "js-cookie";
import { Formik, Field, ErrorMessage } from "formik";
import { setActiveForm, loginSchema } from "@/Validations/UserValidation";
import classNames from "classnames";
export default function Login({ setJoinedUser, setActiveForm }) {
    const [mailEr, setMailEr] = useState(false);
    const [passEr, setPassEr] = useState(false);
    let initialValues = {
        email: "",
        password: "",
    };
    const LoginSubmit = (e) => {
        let user = localStorage.getItem(e.email);
        let parsedUser = user !== null ? JSON.parse(user) : null;
        let password = parsedUser ? parsedUser.email : null;
        if (user === null) {
            setMailEr(true);
        }
        if (password === null || password === undefined) {
            setPassEr(true);
        } else {
            setMailEr(false);
            setPassEr(false);
            setJoinedUser(true);
            Cookies.set("user", JSON.stringify(e.email), {
                expires: 5 / (24 * 60),
            });
        }
    };
    return (
        <div className={styles.Validation__Main}>
            <h3 className={styles.Validation__Main__Headline}>
                სისტემაში შესვლა
            </h3>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={LoginSubmit}
            >
                {(formik) => (
                    <form
                        onSubmit={formik.handleSubmit}
                        className={styles.Validation__Form}
                    >
                        <div className={styles.Validation__Form__InputWrapper}>
                            <Field
                                placeholder="Email"
                                onBlur={formik.handleBlur}
                                name="email"
                                id="email"
                                className={classNames(
                                    styles.Validation__Form__Input,
                                    {
                                        [styles[
                                            "Validation__Form__Input--error"
                                        ]]:
                                            (formik.touched.email &&
                                                formik.errors.email) ||
                                            mailEr,
                                    }
                                )}
                                type="email"
                            />
                            <ErrorMessage
                                className={styles.Validation__Form__ErrorText}
                                name="email"
                                component="div"
                            />
                            {mailEr && (
                                <div
                                    className={
                                        styles.Validation__Form__ErrorText
                                    }
                                >
                                    mail could not be found
                                </div>
                            )}
                        </div>
                        <div className={styles.Validation__Form__InputWrapper}>
                            <Field
                                placeholder="Password"
                                id="password"
                                name="password"
                                className={classNames(
                                    styles.Validation__Form__Input,
                                    {
                                        [styles[
                                            "Validation__Form__Input--error"
                                        ]]:
                                            (formik.touched.password &&
                                                formik.errors.password) ||
                                            passEr,
                                    }
                                )}
                                onBlur={formik.handleBlur}
                                type="password"
                            />
                            <ErrorMessage
                                className={styles.Validation__Form__ErrorText}
                                name="password"
                                component="div"
                            />
                            {passEr && (
                                <div
                                    className={
                                        styles.Validation__Form__ErrorText
                                    }
                                >
                                    password could not be found
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={styles.Validation__Form__Submit}
                        >
                            შესვლა
                        </button>
                        <p
                            onClick={() => {
                                setActiveForm("register");
                            }}
                            className={styles.Validation__Form__SignUpLink}
                        >
                            Do you have not accout? Sign Up
                        </p>
                    </form>
                )}
            </Formik>
        </div>
    );
}
