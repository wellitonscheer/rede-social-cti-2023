"use client";

import React, { useEffect, useState } from "react";

type StockGraph = {
  url: string;
  size: number;
  cors: string;
  etag: string;
  expireAt: string;
  createdAt: string;
};

const StockGraphs = () => {
  const [stocks, setStocks] = useState<StockGraph[]>([]);

  useEffect(() => {
    const buscaStock = async () => {
      try {
        const res = await fetch("/api/stock-graphs", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const stock: { stocks: StockGraph[] } = await res.json();
        console.log(stock.stocks);
        setStocks(stock.stocks);
      } catch (e) {
        console.log("error", e);
      }
    };

    buscaStock();
  }, []);
  return (
    <div className="flex flex-row">
      {stocks?.map((stock, ind) =>
        stock.url ? <img alt={`${ind}`} src={stock.url} /> : null,
      )}
    </div>
  );
};

export default StockGraphs;
