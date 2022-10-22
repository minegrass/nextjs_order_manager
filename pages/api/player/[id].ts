// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/dbserver";

type Data = {
  result: any;
};

let discordOn = false;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.cookies);
  console.log(req.body);
  if (req.method === "GET") {
    const { id } = req.query;
    const result = await prisma.player.findUnique({
      where: {
        discord_id: `${id}`,
      },
    });
    res.json({ result: result });
  }
  // res.json({ result: `${req.method}` });
}
