import React, { useEffect, useState } from "react";
import styles from "./Validation.module.css";
import Cookies from "js-cookie";
import { Formik, Field, ErrorMessage, useFormik } from "formik";
import { setActiveForm, loginSchema } from "@/Validations/UserValidation";
import classNames from "classnames";
export default function Login({ setJoinedUser, setActiveForm }) {
    const [mailEr, setMailEr] = useState(false);
    const [passEr, setPassEr] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    let initialValues = {
        email: "",
        password: "",
    };
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    useEffect(() => {
        const storedFormData = sessionStorage.getItem("formData");
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
        const handleBeforeUnload = (event) => {
            if (storedFormData) {
                event.preventDefault();
                event.returnValue = "";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    useEffect(() => {
        sessionStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

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
                        onChange={onChange}
                        className={styles.Validation__Form}
                    >
                        <div className={styles.Validation__Form__InputWrapper}>
                            <Field
                                placeholder="Email"
                                onBlur={formik.handleBlur}
                                name="email"
                                id="email"
                                value={formData.email}
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
                                value={formData.password}
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
