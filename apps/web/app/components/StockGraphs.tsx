"use client"

import React, { useEffect } from 'react';

const StockGraphs = () => {

  useEffect(() => {

    const buscaStock = async () => {
      const res = await fetch("/api/stock-graphs", {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const product = await res.json()
      console.log(product)
    };

    buscaStock();
  }, [])
  return (
    <div className='flex flex-row'>
      <div> stock graphs</div>
      <div> stock graphs</div>
      <div> stock graphs</div>
    </div>
  );
};

export default StockGraphs;
