import { useState } from "react";
import React from "react";

export default function Header()
{

    const [open ,setOpen]=useState(false)
    return(
        <div>
            <img src="https://svitnashik.in/Images/Header/Final_Svit_Header.png" alt="" />
            <nav className="w-150vw h-15 bg-red-400 ">
                <ul className="flex p-4 gap-6 justify-center">
                    <li>Home</li>
                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>

                   <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>


                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>


                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>


                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>   

                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>

                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>

                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-400">
                            Department
                            </span>  

                                <ul className="absolute left-0 hidden group-hover:block bg-pink-200 rounded-2 ">
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 w-60" >Lorem ipsum dolor sit amet.</li>
                                    </ul> 
                    </li>    

                </ul>
            </nav>
        </div>
    )
}