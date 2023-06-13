import React from "react";
import styles from "./Validation.module.css";
import Input from "../Input/Input";
import { registerSchema } from "@/Validations/UserValidation";
export default function Register({ errors, setErrors, setActiveForm }) {
    const RegisterSubmit = async (e) => {
        e.preventDefault();
        setActiveForm("login");
        let formData = {
            firstname: e.target[0].value,
            lastname: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            repeatpassword: e.target[4].value,
        };
        try {
            await registerSchema.validate(formData, { abortEarly: false });
            setErrors({});
        } catch (error) {
            // console.log(error.errors);
            setErrors(
                error.inner.reduce((acc, currError) => {
                    // console.log(currError.path);
                    acc[currError.path] = currError.message;
                    return acc;
                }, {})
            );
        }
        // let firstName = {
        //     firstname: e.target[0].value,
        // };
        // let lastName = {
        //     lastname: e.target[1].value,
        // };
        // let Email = {
        //     email: e.target[2].value,
        // };
        // let Password = {
        //     password: e.target[3].value,
        // };
        // let Repeatpassword = {
        //     repeatpassword: e.target[4].value,
        // };
        // if (await registerSchema.isValid(formData)) {
        //     setNewUserInfo(formData);
        //     setValid(true);
        // } else {
        //     !(await validFirstname.isValid(firstName))
        //         ? setError("first name isn't valid")
        //         : !(await validLastname.isValid(lastName))
        //         ? setError("last name isn't valid")
        //         : !(await validEmail.isValid(Email))
        //         ? setError("email isn't valid")
        //         : !(await validPassword.isValid(Password))
        //         ? setError("password isn't valid")
        //         : !(await validRepeatPassword.isValid(Repeatpassword))
        //         ? setError("password isn't correct")
        //         : setError("");
        // }
    };
    return (
        <div className={styles.Validation__Main}>
            <h3 className={styles.Validation__Main__Headline}>
                სისტემაში რეგისტრაცია
            </h3>
            <form onSubmit={RegisterSubmit} className={styles.Validation__Form}>
                <div className={styles.Validation__Form__UserWrapper}>
                    <Input
                        placeholder="First Name"
                        type="text"
                        error={errors?.firstname}
                    />
                    <Input
                        placeholder="Last Name"
                        type="text"
                        error={errors?.lastname}
                    />
                </div>
                <Input placeholder="Email" type="email" error={errors?.email} />
                <Input
                    placeholder="Password"
                    type="password"
                    error={errors?.password}
                />
                <Input
                    placeholder="Repeat Password"
                    type="password"
                    error={errors?.repeatpassword}
                />
                <button
                    type="submit"
                    onClick={(e) => e.preventDefault}
                    className={styles.Validation__Form__Submit}
                >
                    რეგისტრაცია
                </button>
            </form>
        </div>
    );
}
