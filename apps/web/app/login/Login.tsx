"use client";

import { useEffect } from "react";
import { app } from "manage-firebase";

export default function Login(): JSX.Element {
  useEffect(() => {
    console.log("effect");
    // getAnalizeDados();
  }, []);

  return <>
    <div className="text-3xl font-bold underline">
    login
    </div>
  </>;
}
