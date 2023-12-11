"use client";

import React, { useState } from "react";
import useCurrentUser from "../hook/useCurrentUser";
import { useRouter } from "next/navigation";
import { Post, createPost } from "manage-firebase";

const CreatePostPage: React.FC = () => {
  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const currentUser = useCurrentUser();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (currentUser && currentUser.email && title && content) {
        const author: string = currentUser.email;
        const post: Post = { title, content, author };

        await createPost(post);

        setTitle("");
        setContent("");
        router.push("/");
      } else {
        router.push("/");
        throw new Error("Dados invalidos!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <h1 className="text-xl font-semibold text-gray-900">Criar um Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Titulo
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="text-sm font-medium text-gray-700"
            >
              Conteudo
            </label>
            <textarea
              id="content"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          {/*
          <div>
            <label
              htmlFor="author"
              className="text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Postar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
