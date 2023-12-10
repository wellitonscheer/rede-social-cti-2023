"use client";

import { createUser } from "manage-firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await createUser(email, password);

      router.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Cadastro</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Cadastrar
        </button>
        <div className="pt-8">
          <Link href="/login" className="text-blue-500 hover:text-blue-600">
            Voltar para o login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
