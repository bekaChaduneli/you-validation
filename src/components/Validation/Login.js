import React from "react";
import styles from "./Validation.module.css";
import { Formik, Field, ErrorMessage } from "formik";
import { setActiveForm, loginSchema } from "@/Validations/UserValidation";
import classNames from "classnames";
export default function Login({}) {
    let initialValues = {
        email: "",
        password: "",
    };
    const LoginSubmit = (e) => {
        console.log(e);
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
                                            formik.touched.name &&
                                            formik.errors.name,
                                    }
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
                                    styles.Validation__Form__Input,
                                    {
                                        [styles[
                                            "Validation__Form__Input--error"
                                        ]]:
                                            formik.touched.name &&
                                            formik.errors.name,
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
