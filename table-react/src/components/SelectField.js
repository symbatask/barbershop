import React from 'react';
import {ErrorMessage, useField, Field} from "formik";

const SelectField = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
        <div className="mb-2">
            <label htmlFor={field.name}>
                {label}
            </label>
            <Field x-cloak id="select"
                    className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 ${meta.touched && meta.error && "is-invalid"}`}>
                <option disabled selected> {...field}{...props}</option>
            </Field>

            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    );
};

export default SelectField;