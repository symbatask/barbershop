import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <nav
                    className="flex flex-col bg-purple-900 w-64 min-h-screen px-4 tex-gray-900 border border-purple-900">
                    <div className="flex flex-wrap mt-8">
                        <div className="w-1/2">
                            <img
                                src="https://randomuser.me/api/portraits/women/27.jpg"
                                className="mx-auto w-20 h-20 rounded-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <span className="font-semibold text-white">Ava Harper</span>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
                                Premium
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 mb-4">
                        <ul className="ml-4">
                            <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-black    hover:text-green-600 hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
                                <Link to="#">
                                    <span className="ml-2">Задачи и работы</span>
                                </Link>
                            </li>
                            <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-black    hover:text-green-600  hover:font-bold rounded rounded-lg">
              <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
                                <Link to="/projects">

                                    <span className="ml-2">Проекты</span>
                                </Link>
                            </li>
                            <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-black    hover:text-green-600  hover:font-bold rounded rounded-lg">
              <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
                                <Link to="#">

                                    <span className="ml-2">Календарь</span>
                                </Link>
                            </li>
                            <li className=" px-4 my-6 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:text-green-600  hover:font-bold rounded rounded-lg">
              <span>
                  <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
                                <Link to="#">
                                    <span className="ml-2">Возможности</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <main className="flex-1">
                <div className="bg-gray-200 text-right py-4 px-2">
                    <img className=" ml-auto w-8 h-8 rounded-full"
                         src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                         alt=""/>
                </div>
                <div className="px-6">
                    <h3 className="uppercase text-purple-900 text-3xl mt-6">Проекты</h3>
                    <div className="flex justify-between">
                        <h5 className="uppercase text-xl text-gray-800 mb-3"> Список проектов</h5>

                        <div>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white p-3 font-bold mb-4">
                                Добавить проект
                            </button>
                            <div>
                                <div
                                    className=" text-sm text-gray-500 leading-none   rounded-full text-right">
                                    <button
                                        className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full  py-2 active"
                                        id="grid">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" className="fill-current w-4 h-4 mr-2">
                                            <rect x="3" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="14" width="7" height="7"></rect>
                                            <rect x="3" y="14" width="7" height="7"></rect>
                                        </svg>

                                    </button>
                                    <button
                                        className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full py-2"
                                        id="list">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" className="fill-current w-4 h-4 mr-2">
                                            <line x1="8" y1="6" x2="21" y2="6"></line>
                                            <line x1="8" y1="12" x2="21" y2="12"></line>
                                            <line x1="8" y1="18" x2="21" y2="18"></line>
                                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                        </svg>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                                <div className="flex flex-wrap">
                                    <div className="w-1/3 px-3">

                                       <div className="mb-3">
                                           <img
                                               src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752"
                                               alt="" className="w-full"/>
                                      <div className="px-3 py-4">
                                          <h5 className="uppercase text-xl mb-3"> Терапевтический корпус</h5>
                                          <ul>
                                              <li className="text-gray-800">
                                                  08.04..2019 - 31.01.2021 ггю
                                              </li>
                                              <li className="text-gray-800">
                                                  Денис Конев
                                              </li >
                                              <li className="text-gray-800">
                                                  Гросолим Лимитед
                                              </li>
                                          </ul>
                                      </div>
                                       </div>
                                    </div>

                                </div>

                </div>
            </main>

        </div>

    );
};

export default Dashboard;