import { useState } from "react";
import React from "react";

export default function Header()
{

    const [open ,setOpen]=useState(false)
    return(
        <div>
            <img src="https://svitnashik.in/Images/Header/Final_Svit_Header.png" alt="" />
            <nav className="w-100vw h-15 bg-red-400 ">
                <ul className="flex p-4 gap-6 justify-center">
                    <li>Home</li>
                    <li>Department</li>
                    <li 
                    onMouseEnter={()=>setOpen(true)}
                    onMouseLeave={()=>setOpen(false)}
                    >
                        <button className="hover:text-blue-600 items-center">Alumni</button>

                        {open && (
                            <ul>
                                   <li>
                                         <a
                                            href="#"
                                             className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Alumni Information
                                            </a>
                                    </li>
                                <li>
                                    <a href="" className="block px-4 py-2 hover:bg-gray-500">
                                        Alumini registeraton
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="block px-4 py-2 hover:bg-gray-500">
                                        search
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="block px-4 py-2 hover:bg-gray-500">
                                        View alumni
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="block px-4 py-2 hover:bg-gray-500">
                                        Alumni Chapters and Alumni Meet Info
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>TPC Section</li>
                    <li>NAAC</li>
                    <li>RTI</li>
                    <li>ERP</li>
                    <li>Library</li>
                    <li>Gallery</li>
                    <li>Examination</li>
                    <li>Important Link</li>
                    <li>Contact Us</li>
                    <li>about Us</li>
                    <li>site Map</li>
                </ul>
            </nav>
        </div>
    )
}