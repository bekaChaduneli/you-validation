import React from "react";
import styles from "./Validation.module.css";
import { Formik, Field, ErrorMessage } from "formik";
import { registerSchema } from "@/Validations/UserValidation";
import classNames from "classnames";
export default function Register({ setActiveForm }) {
    let initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatpassword: "",
    };
    const RegisterSubmit = (e) => {
        console.log(e);
        setActiveForm("login");
        localStorage.setItem(e, JSON.stringify(e));
    };
    return (
        <div className={styles.Validation__Main}>
            <h3 className={styles.Validation__Main__Headline}>
                სისტემაში რეგისტრაცია
            </h3>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={RegisterSubmit}
            >
                {(formik) => (
                    <form
                        onSubmit={formik.handleSubmit}
                        className={styles.Validation__Form}
                    >
                        <div className={styles.Validation__Form__UserWrapper}>
                            <div
                                className={
                                    styles.Validation__Form__InputWrapper
                                }
                            >
                                <Field
                                    placeholder="First Name"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    name="firstname"
                                    id="firstname"
                                    className={classNames(
                                        styles.Validation__Form__Input,
                                        {
                                            [styles[
                                                "Validation__Form__Input--error"
                                            ]]:
                                                formik.touched.firstname &&
                                                formik.errors.firstname,
                                        }
                                    )}
                                />
                                <ErrorMessage
                                    className={
                                        styles.Validation__Form__ErrorText
                                    }
                                    name="firstname"
                                    component="div"
                                />
                            </div>
                            <div
                                className={
                                    styles.Validation__Form__InputWrapper
                                }
                            >
                                <Field
                                    placeholder="Last Name"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    name="lastname"
                                    id="lastname"
                                    className={classNames(
                                        styles.Validation__Form__Input,
                                        {
                                            [styles[
                                                "Validation__Form__Input--error"
                                            ]]:
                                                formik.touched.lastname &&
                                                formik.errors.lastname,
                                        }
                                    )}
                                />
                                <ErrorMessage
                                    className={
                                        styles.Validation__Form__ErrorText
                                    }
                                    name="lastname"
                                    component="div"
                                />
                            </div>
                        </div>
                        <div className={styles.Validation__Form__InputWrapper}>
                            <Field
                                placeholder="Email"
                                type="email"
                                onBlur={formik.handleBlur}
                                name="email"
                                id="email"
                                className={classNames(
                                    styles.Validation__Form__Input,
                                    {
                                        [styles[
                                            "Validation__Form__Input--error"
                                        ]]:
                                            formik.touched.email &&
                                            formik.errors.email,
                                    }
                                )}
                            />
                            <ErrorMessage
                                className={styles.Validation__Form__ErrorText}
                                name="email"
                                component="div"
                            />
                        </div>
                        <div className={styles.Validation__Form__InputWrapper}>
                            <Field
                                placeholder="Password"
                                type="password"
                                onBlur={formik.handleBlur}
                                name="password"
                                id="password"
                                className={classNames(
                                    styles.Validation__Form__Input,
                                    {
                                        [styles[
                                            "Validation__Form__Input--error"
                                        ]]:
                                            formik.touched.password &&
                                            formik.errors.password,
                                    }
                                )}
                            />
                            <ErrorMessage
                                className={styles.Validation__Form__ErrorText}
                                name="password"
                                component="div"
                            />
                        </div>
                        <div className={styles.Validation__Form__InputWrapper}>
                            <Field
                                placeholder="Repeat Password"
                                type="password"
                                onBlur={formik.handleBlur}
                                name="repeatpassword"
                                id="repeatpassword"
                                className={classNames(
                                    styles.Validation__Form__Input,
                                    {
                                        [styles[
                                            "Validation__Form__Input--error"
                                        ]]:
                                            formik.touched.repeatpassword &&
                                            formik.errors.repeatpassword,
                                    }
                                )}
                            />
                            <ErrorMessage
                                className={styles.Validation__Form__ErrorText}
                                name="repeatpassword"
                                component="div"
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.Validation__Form__Submit}
                        >
                            რეგისტრაცია
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
