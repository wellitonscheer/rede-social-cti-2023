"use client";

import { updateUserProfile } from "manage-firebase";
import React, { useEffect, useState } from "react";
import useCurrentUser from "../hook/useCurrentUser";
import { useRouter } from "next/navigation";

const UpdateProfilePage: React.FC = () => {
  const [displayName, setDisplayName] = useState<string>("");
  const [photoURL, setPhotoURL] = useState<string>("");
  const user = useCurrentUser();
  const route = useRouter();

  useEffect(() => {
    if (user && user.displayName && user.photoURL) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (user && user.uid) {
        await updateUserProfile(user?.uid, displayName, photoURL);
        route.refresh();
      } else {
        route.push("/login");
      }
    } catch (e) {
      console.log(e);
      route.push("/");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="displayName"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            Nome a ser mostrado
          </label>
          <input
            type="text"
            id="displayName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block text-gray-200 text-sm font-bold mb-2"
          >
            URL da foto
          </label>
          <input
            type="text"
            id="photoURL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
