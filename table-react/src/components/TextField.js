import React from 'react';
import {ErrorMessage, useField} from "formik";

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className="mb-2">
            <label htmlFor={field.name}>
                {label}
            </label>

            <input
                className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 ${meta.touched && meta.error && "is-invalid"}`}
                {...field}{...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    );
};

export default TextField;