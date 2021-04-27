import React from 'react';
import TextField from "./TextField";
import * as Yup from "yup";
import {Formik, Form} from "formik";

const FormStudent = ({setIsShown, setInfos, infos}) => {
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
                laptop: "",
                comments: "",
                gender: "",
                group: "",
                status: "",
            }}
            validationSchema={validate}
            onSubmit={values => {
                let newStudent = {
                    comments: values.comments,
                    contract_amount: values.contract_amount,
                    gender: values.gender,
                    group: values.group,
                    laptop: values.laptop,
                    name: values.firstName,
                    phone_number: values.phone,
                    prepay: values.paid,
                    status: values.active,
                    updatedAt: "2021-04-26T04:58:12.161Z",
                    __v: 0,
                    _id: Math.random().toString().slice(1, 3)
                }
                setInfos([...infos, newStudent])
                setIsShown(false)
            }}
        >

            {formik => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 flex flex-col absolute top-0 left-96 ">
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
                            <TextField label="Сумма контракта" name="contract" type="number"/>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <TextField label="Оплатил" name="paid" type="number"/>
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
                                Группа
                            </label>
                            <select x-cloak id="select"
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4">
                                <option disabled selected>Выберите группу</option>
                                <option value="Утренняя">Утренняя</option>
                                <option value="Дневная">Дневная</option>
                                <option value="Вечерняя">Вечерняя</option>
                            </select>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-state">
                                Статус
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                                    id="grid-state">
                                    <option disabled selected>Выберите статус</option>
                                    <option value="Закрыт">Закрыт</option>
                                    <option value="Открыт">Открыт</option>

                                </select>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-zip">
                                Пол
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
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <TextField label="Введите комментарий" name="comments" type="text"/>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="mt-3  w-24 bg-gray-500 text-white px-3 py-2 rounded-md mr-3" type="submit"
                                onClick={() => setIsShown(false)}
                        >Clear
                        </button>
                        <button className="mt-3  w-24 bg-black text-white px-3 py-2 rounded-md" type="submit"

                        >Register
                        </button>
                        <button className="mt-3 ml-3 w-24 bg-gray-700 text-white px-3 py-2 rounded-md"
                                type="reset">Reset
                        </button>
                    </div>
                </Form>

            )}
        </Formik>

    )
};

export default FormStudent;