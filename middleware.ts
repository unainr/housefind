// export {auth as middleware} from "@/auth";

import { NextResponse } from 'next/server';

export function middleware(req:any) {
  const token = req.cookies.get('token');

  
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
