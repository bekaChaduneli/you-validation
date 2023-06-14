import * as yup from "yup";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
export const registerSchema = yup.object().shape({
    firstname: yup.string().required("First Name is required!"),
    lastname: yup.string().required("Last Name is required!"),
    email: yup
        .string()
        .email()
        .matches(emailRegex, "Enter a valid email!")
        .required("Email is required!"),
    password: yup
        .string()
        .min(6)
        .max(22)
        .required("Password is required!")
        .matches(passwordRegex, "Password isn't valid!"),
    repeatpassword: yup
        .string()
        .min(6)
        .max(22)
        .oneOf([yup.ref("password"), null], "Passwords must match!"),
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .matches(emailRegex, "Enter a valid email!")
        .required("Email is required!"),
    password: yup
        .string()
        .min(6)
        .max(22)
        .required("Password is required!")
        .matches(passwordRegex, "password isn't valid!"),
});
