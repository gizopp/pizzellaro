import { NextResponse, NextRequest } from "next/server";
import { getCoookieServer } from "./lib/cookieServer";
import { api } from "./services/app";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname === "/") {
    return NextResponse.next();
  }

  const token = getCoookieServer();

  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const isTokenValid = await validateToken(token);

    if (!isTokenValid) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  }

  async function validateToken(token: string) {
    if (!token) return false;

    try {
      await api.get("/userdetails", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
