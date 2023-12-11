"use client";

import { fetchPosts, fetchCommentsForPost } from "manage-firebase";
import React, { useEffect, useState } from "react";
import PostWithComment from "./PostWithComment";

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

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<PostAndComment[]>([]);

  useEffect(() => {
    fetchPosts((fetchedPosts) => {
      fetchedPosts.forEach((post) => {
        fetchCommentsForPost(post.id, (comments) => {
          setPosts((prevPosts) =>
            prevPosts.map((p) =>
              p.id === post.id ? { ...p, comments: comments } : p,
            ),
          );
        });
      });
      setPosts(fetchedPosts);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {posts.length > 0 ? (
        posts.map((post) => <PostWithComment post={post} />)
      ) : (
        <p className="text-center text-gray-500">Nenhum post disponivel</p>
      )}
    </div>
  );
};

export default PostsList;
