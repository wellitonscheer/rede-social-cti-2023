"use client"

import { useState } from "react";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="h-screen bg-gray-800">
      <div className="flex ml-4 xl:ml-12 2xl:ml-31 pr-8 ">
        <div
          className="inline-block bg-black rounded-xl
              text-left overflow-hidden transform
            transition-all align-middle
             drop-shadow-[0_0_3px_#ffffffd6]"
        >
          <div className="flex flex-col justify-center items-center">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="pb-5 text-[#d9d9d9] flex items-center w-full justify-between space-x-36 mt-6 px-4"
            >
              <div className="flex">
                <img
                  src="https://i.pinimg.com/originals/7d/ea/27/7dea271557ea11db65d0cdd1170391ec.png"
                  alt=""
                  className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                  <h4 className="font-bold">session.user.name</h4>
                  <p className="text-[#6e767d]">@session.user.tag</p>
                </div>
              </div>
            </div>
            {isOpen && (
              <>
                <div className="w-full h-[0.1px] bg-gray-700 mt-4"></div>
                <div className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer">
                  <span className="ml-4">Add an existing account</span>
                </div>
                <div
                  onClick={() => { console.log("isso ai") }}
                  className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer"
                >
                  <span className="ml-4">{`Log out @$session.user.tag`}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
