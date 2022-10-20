import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
type Data = {
  auth: boolean;
  token: string | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { user, pass } = req.body;
    console.log(user, pass);
    if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
      if (process.env.MY_SECRET) {
        const token = jwt.sign({ simple: "auth" }, process.env.MY_SECRET, {
          expiresIn: "2h",
        });
        res.status(201).json({ auth: true, token: token });
      } else {
        console.error("Secret for JWT are undefined.");
      }
    } else {
      res.status(201).json({ auth: false, token: null });
    }
  }
}
