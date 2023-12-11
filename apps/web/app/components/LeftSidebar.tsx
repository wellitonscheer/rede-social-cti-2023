"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LeftSidebar = () => {
  const router = useRouter();

  return (
    <div className="self-center w-64 h-screen bg-black text-white p-4">
      <div className="self-center bg-black text-white space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform-translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <button className="text-white text-3xl">
          <Link href="/">
            <Image src="/layout/logo.png" alt="Logo" width="64" height="64" />
          </Link>
        </button>

        <button
          onClick={() => router.push("/post")}
          className="bg-blue-500 text-white w-full py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Postar
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
