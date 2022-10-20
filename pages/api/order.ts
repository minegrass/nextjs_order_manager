// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { orderListItem } from "../../typeconfig";
const prisma = new PrismaClient();
type Data = {
  result: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const result = await prisma.orderlist.findMany({
      select: {
        order_id: true,
        request: true,
        full_price: true,
        price: true,
      },
    });
    res.status(200).json({ result: result });
  }
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).json({ result: "POST" });
  }
  if (req.method === "PUT") {
    res.status(200).json({ result: "PUT" });
  }
  if (req.method === "DELETE") {
    res.status(200).json({ result: "DELETE" });
  }
}
