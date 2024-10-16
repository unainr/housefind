// export {auth as middleware} from "@/auth";

import { NextResponse } from 'next/server';

export function middleware(req:any) {
  const token = req.cookies.get('token');

  if (!token && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
