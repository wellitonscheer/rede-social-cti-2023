"use client";

import { Comment, addCommentToPost } from "manage-firebase";
import React, { useState } from "react";
import useCurrentUser from "../hook/useCurrentUser";

interface PostComment {
  id: string;
  content: string;
  author: string;
}

interface PostAndComment {
  id: string;
  title: string;
  content: string;
  author: string;
  comments?: PostComment[];
}

export default function PostWithComment({ post }: { post: PostAndComment }) {
  const [comments, setComments] = useState<boolean>(false);
  const currentUser = useCurrentUser();

  const handleCommentSubmit = async (e: React.FormEvent, postId: string) => {
    try {
      e.preventDefault();

      const commentContent = e.target[0].value;
      if (currentUser && currentUser.email && postId && commentContent) {
        const newComment: Comment = {
          content: commentContent,
          author: currentUser.email, // Replace with actual author, e.g., from user context
        };
        console.log(newComment);

        await addCommentToPost(postId, newComment);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div
        key={post.id}
        className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4"
      >
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-white font-semibold">
            {post.title}
          </div>
          <p className="mt-2 text-white">{post.content}</p>
          <div className="mt-4">
            <span className="text-indigo-400">Author: {post.author}</span>
          </div>

          <div onClick={() => setComments(!comments)} className="mt-4 pt-4">
            <button className="uppercase text-indigo-200 hover:text-indigo-900">
              Abrir comentarios
            </button>
          </div>
          {comments && (
            <div>
              <div className="mt-4 flex flex-col">
                <h3 className="text-white">Comentarios</h3>
                <br />
                <ul className="">
                  {post.comments && post.comments.length > 0 ? (
                    post.comments.map((comment) => (
                      <li
                        key={comment.id}
                        className="flex-wrap pt-2 text-white"
                      >
                        <span className="bg-gray-500">{comment.author}</span>:
                        <span className="pl-1"> {comment.content}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-white">Nenhum comentario</li>
                  )}
                </ul>
              </div>

              <form onSubmit={(e) => handleCommentSubmit(e, post.id)}>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none"
                  placeholder="Escreva um comentario"
                />
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Postar Comentario
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
