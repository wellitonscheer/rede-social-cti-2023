import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import { app } from "./initialize";

export const AUTH = getAuth(app);

export const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      AUTH,
      email,
      password,
    );
    console.log(userCredential);
    console.log("User created: ", userCredential.user);
  } catch (error) {
    console.error("Error creating user: ", error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      AUTH,
      email,
      password,
    );
    console.log(userCredential);
    console.log("User logged in: ", userCredential.user);
  } catch (error) {
    console.error("Error logging in: ", error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(AUTH);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

export const updateUserProfile = async (
  uid: string,
  displayName: string | null,
  photoURL: string | null,
) => {
  const user = AUTH.currentUser;

  if (user && user.uid === uid) {
    try {
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      console.log("User profile updated: ", user);
    } catch (error) {
      console.error("Error updating user profile: ", error);
    }
  } else {
    console.error("User not found or UID mismatch");
  }
};
