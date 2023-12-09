type StockGraph = {
  url: string;
  size: number;
  cors: string;
  etag: string;
  expireAt: string;
  createdAt: string;
};

const API_KEY = "SEXof8YvEh4ahddwkGLAb8c6IE11DdY2vJAsRhs3";

export async function GET(_: Request) {
  try {
    const symbols = ["BINANCE:BTCUSDT", "BCS:SQM_B", "BINGX:BTCUSDT"];

    /*const stocks: StockGraph[] = await Promise.all(symbols.map(async (symbol) => {
      const res = await fetch(`https://api.chart-img.com/v1/tradingview/mini-chart/storage?interval=1D&symbol=${symbol}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      })
      const stock: StockGraph = await res.json()
      console.log("stock", stock);
      return stock
    }))
    console.log("all", stocks)*/

    return Response.json({
      stocks: [
        {
          url: "https://api.chart-img.com/v1/storage/pub/18fa6a7a-e9f4-4ddb-bd4a-ca4e609fd80c.png",
          size: 24543,
          cors: "*",
          etag: "9af31d92a5add6afcab0c9ce747812c5",
          expireAt: "2023-12-22T23:41:16.573Z",
          createdAt: "2023-12-08T23:41:17.848Z",
        },
        {
          url: "https://api.chart-img.com/v1/storage/pub/2d6386cc-b788-4aa3-877c-757a28b54756.png",
          size: 26316,
          cors: "*",
          etag: "224f71091345788d92a5abd6dbb90940",
          expireAt: "2023-12-22T23:41:19.252Z",
          createdAt: "2023-12-08T23:41:21.122Z",
        },
        {
          url: "https://api.chart-img.com/v1/storage/pub/4f935b5d-be49-44fe-92a0-a353ed3a7022.png",
          size: 26474,
          cors: "*",
          etag: "9bba44f5bb1fc4f74ac19b3e9d51aa21",
          expireAt: "2023-12-22T23:43:44.767Z",
          createdAt: "2023-12-08T23:43:45.128Z",
        },
      ],
    });
  } catch (e) {
    console.log("error", e);
  }
}
