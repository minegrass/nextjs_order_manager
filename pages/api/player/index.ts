// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { orderListItem } from "../../../sharedVar";
import { prisma } from "../../../prisma/dbserver";
import { player } from "../../../sharedVar";
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
    // if (req.body.discord_id) {
    //   const result = await prisma.player.findUnique({
    //     where: {
    //       discord_id: req.body.discord_id,
    //     },
    //   });
    //   res.json({ result: result });
    const result = await prisma.player.findMany();
    res.json({ result: result });
  }

  if (req.method === "POST") {
  }
  if (req.method === "PUT") {
    // console.log("post req");
    const reqBody = req.body;
    const { discord_id, ...otherData } = reqBody;
    await prisma.player.update({
      where: {
        discord_id: discord_id,
      },
      data: otherData,
    });
    res.json({ result: "DONE UPDATED" });
  }
  if (req.method === "DELETE") {
  }
  // res.json({ result: `${req.method}` });
}
