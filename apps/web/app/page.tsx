"use client";

import StockGraphs from "./components/StockGraphs";
import PostsList from "./components/PostList";

const Logout = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <StockGraphs />
      <PostsList />
    </div>
  );
};

export default Logout;
