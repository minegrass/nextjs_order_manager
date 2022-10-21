// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { verify } from "crypto";

const jwtSecret = process.env.MY_SECRET
  ? process.env.MY_SECRET
  : console.error("Secret for JWT are undefined.");

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");
  //middleware for "/"
  if (req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/order";

    if (accessToken && jwtSecret) {
      try {
        const result = await jwtVerify(
          accessToken,
          new TextEncoder().encode(jwtSecret)
        );
        console.log("auth complete");
        return NextResponse.redirect(url);

        //   result.then((item) => {
        //     console.log(item);
        //   });
      } catch (e) {
        // middleware for "/" -> login page
        //   console.log(req.nextUrl.pathname);
        return NextResponse.next();
      }
    } else {
      return NextResponse.next();
    }
  }

  //middleware for others
  if (req.nextUrl.pathname !== "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    if (accessToken && jwtSecret) {
      try {
        const result = await jwtVerify(
          accessToken,
          new TextEncoder().encode(jwtSecret)
        );
        console.log("auth complete");

        return NextResponse.next();

        //   result.then((item) => {
        //     console.log(item);
        //   });
      } catch (e) {
        // middleware for "/" -> login page
        //   console.log(req.nextUrl.pathname);
        return NextResponse.redirect(url);
      }
    } else {
      return NextResponse.redirect(url);
    }
  }
}

// See "Matching Paths" below to learn more

export const config = {
  matcher: ["/order", "/player", "/", "/api/order"],
};
