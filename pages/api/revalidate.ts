// http://localhost:3000/api/revalidate?path=/posts&secret=BloggingPlatform

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SERCRET_TOKEN) {
    return res.status(401).json({ message: "invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true });
}
