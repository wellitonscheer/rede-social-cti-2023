import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { AUTH } from "manage-firebase";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AUTH, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return currentUser;
};

export default useCurrentUser;
