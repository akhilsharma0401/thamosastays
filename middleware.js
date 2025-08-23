import { NextResponse } from "next/server";

// Middleware to check for secretKey in API requests
export async function middleware(request) {

  if (request.nextUrl.pathname === "/api/ip") {
    return NextResponse.next();
  }
  if (!request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const secretKey =
    request.headers.get("x-secret-key") ||
    request.nextUrl.searchParams.get("secretKey");

  const expectedSecretKey = process.env.API_SECRET_KEY;

  if (!secretKey || secretKey !== expectedSecretKey) {
    return new NextResponse(
      JSON.stringify({
        message: "Unauthorized: Invalid or missing secret key",
        status: false,
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};