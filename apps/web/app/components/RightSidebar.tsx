"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useCurrentUser from "../hook/useCurrentUser";
import { logoutUser } from "manage-firebase";

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const currentUser = useCurrentUser();

  return (
    <div className="h-screen bg-black">
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
                  src={
                    currentUser && currentUser.photoURL
                      ? currentUser.photoURL
                      : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                  }
                  alt="foto-perfil"
                  className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                  <h4 className="font-bold">
                    {currentUser && currentUser.displayName
                      ? currentUser.displayName || currentUser.email
                      : "Não identificado"}
                  </h4>
                  <p className="text-[#6e767d]">
                    {currentUser && currentUser.email
                      ? currentUser.email
                      : "whoiam"}
                  </p>
                </div>
              </div>
            </div>
            {isOpen && (
              <>
                <div className="w-full h-[0.1px] bg-gray-700 mt-4"></div>
                {currentUser ? (
                  <div
                    onClick={() => {
                      logoutUser();
                      setIsOpen(false);
                      router.push("/");
                    }}
                    className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer"
                  >
                    <span className="ml-4">Fazer Logout</span>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      router.push("/login");
                      setIsOpen(false);
                    }}
                    className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer"
                  >
                    <span className="ml-4">Fazer Login</span>
                  </div>
                )}
                {currentUser && currentUser.email ? (
                  <div
                    onClick={() => {
                      router.push("/perfil");
                      setIsOpen(false);
                    }}
                    className="text-white text-md font-light py-4 hover:bg-zinc-900 w-full cursor-pointer"
                  >
                    <span className="ml-4">Meu Perfil</span>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
