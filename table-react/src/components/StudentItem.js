import React from 'react';
import FormStudent from "./FormStudent";

const StudentItem = ({info,infos,setInfos,isShown,setIsShown}) => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium">{info.name || " "} </span>
                </div>
            </td>
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <div className="mr-2">
                        <i className="fas fa-phone text-green-800"></i>
                    </div>
                    <span>{info.phone_number || " "}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                    <span>{info.contract_amount || " "}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <span>{info.prepay || " "}</span>
            </td>
            <td className="py-3 px-6 text-center">
                <span>{info.laptop || " "}</span>
            </td>
            <td className="py-3 px-6 text-center">
                <span>{info.group || " "}</span>
            </td>
            <td className="py-3 px-6 text-center">
                <span>{info.comments || " "}</span>
            </td>
            <td className="py-3 px-6 text-center">
                                        <span
                                            className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{info.status}</span>
            </td>
            <td className="py-3 px-6 text-center">

                <button  onClick={() => {
                    let newInfos = infos.filter(el => el._id != info._id)
                    setInfos(newInfos)
                }}>
                    <i className="fas fa-trash"
                    ></i>
                </button>
                <button onClick={() =>setIsShown(true)} className="mr-3">
                    <i className="fas fa-pen ml-3"></i>
                </button>

            </td>
            {isShown && <FormStudent setIsShown={setIsShown} setInfos={setInfos} infos={infos}
                                     initialValues={{
                                         comments: infos[0].comments,
                                         contract_amount: infos[0].contract_amount,
                                         gender: infos[0].gender,
                                         group: infos[0].group,
                                         laptop: infos[0].laptop,
                                         name: infos[0].name,
                                         phone_number: infos[0].phone_number,
                                         prepay: infos[0].prepay,
                                         status: infos[0].status,
                                         updatedAt: "2021-04-26T04:58:12.161Z",
                                         __v: 0,
                                         _id: Math.random().toString().slice(1, 3)
                                     }}

            />}

        </tr>


    );

};


export default StudentItem;