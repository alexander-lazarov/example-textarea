// import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const res = NextResponse.next();

//   // Add CORS headers
//   res.headers.set('Access-Control-Allow-Origin', '*');
//   res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//   // Handle preflight request
//   if (req.method === 'OPTIONS') {
//     return new Response(null, {
//       headers: res.headers,
//     });
//   }

//   return res;
// }