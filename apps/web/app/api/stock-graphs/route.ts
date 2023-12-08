export async function GET(req: Request) {
  console.log(await req.json())
  const api_key = "SEXof8YvEh4ahddwkGLAb8c6IE11DdY2vJAsRhs3";
  const res = await fetch("https://api.chart-img.com/v1/tradingview/mini-chart/storage?interval=1D", {
    headers: {
      Authorization: `Bearer ${api_key}`,
      'Content-Type': 'application/json',
    },
  })
  const product = await res.json()
  console.log(product)

  return Response.json({ product })
}
