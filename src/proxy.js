import {NextResponse } from "next/server";

export function proxy(request) {
  console.log("Running Application proxy")
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};