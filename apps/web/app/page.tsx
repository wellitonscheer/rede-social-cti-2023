"use client"

import { Fragment, useState } from "react";
import StockGraphs from "./components/StockGraphs";

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center text-white">
      <StockGraphs/>
    </div>
  );
};

export default Logout;
