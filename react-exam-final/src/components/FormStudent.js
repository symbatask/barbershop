import React from 'react';
import TextField from "./TextField";
import * as Yup from "yup";
import {Formik} from "formik";

const Form = () => {
    const validate = Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            phone: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            contract: Yup.string()
                .required("Required"),
            paid: Yup.string()
                .required("Required"),
            laptop: Yup.string()
                .required("Required"),
        }
    )
    return (
        <Formik
            initialValues={{
                firstName: "",
                phone: "",
                contract: "",
                paid: "",
                laptop: ""
            }}
            validationSchema={validate}
        >
            {formik => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextField label="Введите имя" name="firstName" type="text"/>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <TextField label="Номер телефона" name="phone" type="text"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <TextField label="Сумма контракта" name="contract" type="text"/>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <TextField label="Оплатил" name="paid" type="text"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <TextField label="Ноутбук" name="laptop" type="text"/>

                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-city">
                                City
                            </label>
                            <select x-cloak id="select"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4">
                                <option disabled selected>Выберите группу</option>
                                <option value="Утренняя">Утренняя</option>
                                <option value="Дневная">Дневная</option>
                                <option value="Вечерняя">Вечерняя</option>
                            </select>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-city" type="text" placeholder="Albuquerque"/>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option disabled selected>Выберите статус</option>
                                    <option value="Закрыт">Закрыт</option>
                                    <option value="Открыт">Открыт</option>

                                </select>
                                <div
                                    className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-zip">
                                Zip
                            </label>
                            <select
                                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                id="grid-state">
                                <option disabled selected>Выберите пол</option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="mt-3  w-24 bg-black text-white px-3 py-2 rounded-md" type="submit">Register</button>
                        <button className="mt-3 ml-3 w-24 bg-gray-700 text-white px-3 py-2 rounded-md" type="reset">Reset</button>
                    </div>
                </Form>

            )}
        </Formik>)
};

export default Form;