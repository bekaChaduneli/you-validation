import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import styles from "./Validation.module.css";
import { Formik, Field, ErrorMessage } from "formik";
import {
    setErrors,
    setActiveForm,
    errors,
    loginSchema,
} from "@/Validations/UserValidation";
import classNames from "classnames";
export default function Login({ errors, setErrors, valid, setValid }) {
    let initialValues = {
        email: "",
        password: "",
    };
    const LoginSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <div className={styles.Validation__Main}>
            <h3 className={styles.Validation__Main__Headline}>
                სისტემაში შესვლა
            </h3>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={(value) => {
                    console.log(value);
                }}
            >
                {(formik) => (
                    <form
                        onSubmit={LoginSubmit}
                        className={styles.Validation__Form}
                    >
                        <div className={styles.Validation__Form__InputWrapper}>
                            <Field
                                placeholder="Email"
                                onBlur={formik.handleBlur}
                                name="email"
                                id="email"
                                className={classNames(
                                    styles.Validation__Form__Input
                                )}
                                type="email"
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
                                id="password"
                                name="password"
                                className={classNames(
                                    styles.Validation__Form__Input
                                )}
                                onBlur={formik.handleBlur}
                                type="password"
                            />
                            <ErrorMessage
                                className={styles.Validation__Form__ErrorText}
                                name="password"
                                component="div"
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.Validation__Form__Submit}
                        >
                            შესვლა
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
