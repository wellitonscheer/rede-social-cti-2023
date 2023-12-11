import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { app } from "./initialize";

export interface Post {
  title: string;
  content: string;
  author: string;
}

export interface Comment {
  content: string;
  author: string;
}

const database = getDatabase(app);

export const createPost = async (post: Post) => {
  const postsRef = ref(database, "posts");
  const newPostRef = push(postsRef);
  await set(newPostRef, post);
};

export const fetchPosts = (callback: (posts: any[]) => void) => {
  const postsRef = ref(database, "posts");
  onValue(postsRef, (snapshot) => {
    const data = snapshot.val();
    const postsArray = data
      ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
      : [];
    callback(postsArray);
  });
};

export const addCommentToPost = async (postId: string, comment: Comment) => {
  const database = getDatabase();
  const commentsRef = ref(database, `comments/${postId}`);
  await push(commentsRef, comment);
};

export const fetchCommentsForPost = (
  postId: string,
  callback: (comments: any[]) => void,
) => {
  const database = getDatabase();
  const commentsRef = ref(database, `comments/${postId}`);
  onValue(commentsRef, (snapshot) => {
    const data = snapshot.val();
    const commentsArray = data
      ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
      : [];
    callback(commentsArray);
  });
};
