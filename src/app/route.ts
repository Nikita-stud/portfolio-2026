import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === '/route') {
    return NextResponse.json({ message: 'This is the route endpoint' });
  }

  return NextResponse.json({ message: 'Not Found' }, { status: 404 });
}
