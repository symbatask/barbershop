import React, {useState, useEffect} from 'react';
import axios from "axios";
import FormStudent from "./FormStudent";
import StudentItem from "./StudentItem";


const Students = () => {
    const [infos, setInfos] = useState([])
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        axios("https://60865232d14a870017579131.mockapi.io/students")
            .then(({data}) => setInfos(data))
    }, [])


    return (
        <div className="overflow-x-auto container mx-auto">

            <div>
                <div
                    className="bg-gray-100 flex bg-gray-100 font-sans overflow-hidden ">
                    <div className="w-full">
                        <div className="rounded my-6">

                            <table className="min-w-max w-full table-auto">
                                <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3  text-left">Имя</th>
                                    <th className="py-3  text-left">Номер телефона</th>
                                    <th className="py-3  text-center">Сумма контракта</th>
                                    <th className="py-3  text-center">Оплатил</th>
                                    <th className="py-3  text-center">Ноутбук</th>
                                    <th className="py-3  text-center">Группа</th>
                                    <th className="py-3  text-center">Комментарий</th>
                                    <th className="py-3  text-center">Статус</th>
                                    <th className="py-3  text-center">Actions</th>
                                </tr>
                                </thead>
                                {
                                    infos.map((info) => (
                                        <tbody className="text-gray-600 text-sm font-light">
                                        <StudentItem
                                            info={info}
                                            infos={infos}
                                            setInfos={setInfos}
                                            setIsShown={setIsShown}
                                        />
                                        </tbody>
                                    ))
                                }
                            </table>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <button className="text-white bg-blue-600 p-2 rounded  hover:text-gray-100"
                        onClick={() => setIsShown(true)}
                >
                    Добавить новый контакт
                </button>
            </div>

            {isShown && <FormStudent setIsShown={setIsShown} setInfos={setInfos} infos={infos}
                                     isShown={isShown}
                                     initialValues={{
                                         name: "",
                                         phone_number: "",
                                         contract_amount: "",
                                         prepay: "",
                                         laptop: "",
                                         comments: "",
                                         gender: "",
                                         group: "",
                                         status: "",
                                     }}

            />}
        </div>


    );
};

export default Students;