import React from 'react';
import {Formik, Form} from "formik";
import TextField from "./TextField";
import * as Yup from "yup"

const Signup = () => {
    const validate = Yup.object({
            firstName:Yup.string()
                .max(15,"Must be 15 characters or less")
                .required("Required"),
            phone:Yup.string()
                .max(20,"Must be 20 characters or less")
                .required("Required"),
            email:Yup.string()
                .email("Email is invalid")
                .required("Required"),
            password:Yup.string()
                .min(6,"Must be at least 6 characters")
                .required("Required"),
            confirmPassword:Yup.string()
                .oneOf([Yup.ref("password"), null], "Password must match")
                .required("Required"),
        }
    )
    return (
        <Formik
            initialValues={{
                firstName: "",
                phone: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={validate}
        >

            {formik => (
                <div>
                    <h1 className="my-4 font-bold">Sign Up</h1>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Last Name" name="lastName" type="text"/>
                        <TextField label="Email" name="email" type="email"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                        <button className="mt-3 bg-black text-white px-3 py-2 rounded-md" type="submit">Register</button>
                        <button className="mt-3 ml-3 bg-gray-700 text-white px-3 py-2 rounded-md" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default Signup;