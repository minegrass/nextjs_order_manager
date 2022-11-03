// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { orderListItem } from "../../sharedVar";
import { prisma } from "../../prisma/dbserver";
import { orderSenderBody } from "../../sharedVar";
import { getCookie } from "cookies-next";

const dcURL = process.env.DCURL

type Data = {
  result: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(req.cookies);
  // console.log(req.body);
  if (req.method === "GET") {
    const result =
      await prisma.$queryRaw`SELECT orderlist.order_id,orderlist.request,orderlist.full_price,orderlist.price,orderlist.done_order,player.discord_id,player.nickname
    FROM orderlist
    INNER JOIN player
    ON orderlist.player_id = player.discord_id;`;
    res.status(200).json({ result: result });
  }
  if (req.method === "POST") {
    // make sure only login to discord and create event listener to button once
    const reqBody: orderSenderBody = req.body;
    const full_price = reqBody.price;
    const playerPrice = Math.floor(reqBody.price * 0.7); // cut is 3/7
    const dataBody = {
      ...reqBody,
      full_price: full_price,
      price: playerPrice,
    };
    // console.log(dataBody);
    const result = await prisma.orderlist.create({
      data: dataBody,
    });
    // console.log(result);
    // console.log(dcURL);
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    // console.log(req.headers.cookie?.split("=")[1]);
    requestHeaders.set("accessToken", `${req.headers.cookie?.split("=")[1]}`);
    await fetch(dcURL, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({
        order_id: `${result.order_id}`,
      }),
    })
      .then((item) => {
        return item.json();
      })
      .then((data) => {
        console.log(data);
      });

    res.status(200).json({ result: "POST" });
  }
  if (req.method === "PUT") {
    const { order_id, ...dataToUpdate } = req.body;
    // console.log(dataToUpdate);
    const updateUser = await prisma.orderlist.update({
      where: {
        order_id: req.body.order_id,
      },
      data: dataToUpdate,
    });
    res.status(200).json({ result: "PUT" });
  }
  if (req.method === "DELETE") {
    const result = await prisma.orderlist.delete({
      where: {
        order_id: req.body.order_id,
      },
    });
    res.status(200).json({ result: "DELETE" });
  }
}
