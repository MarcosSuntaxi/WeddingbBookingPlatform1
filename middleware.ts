import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Aquí puedes agregar lógica más compleja, como decodificar el JWT para verificar el rol del usuario
  // y redirigir en consecuencia

  return NextResponse.next()
}

export const config = {
  matcher: ["/panel-admin/:path*", "/panel-usuario/:path*"],
}

