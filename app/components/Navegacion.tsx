"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navegacion() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-400" fill="currentColor" />
              <span className="text-2xl font-semibold text-gray-900">WeddingBooking</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/lugares-para-boda" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              LUGARES PARA BODA
            </Link>
            <Link href="/comunidad" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              COMUNIDAD
            </Link>
            {isHome && (
              <>
                <Link href="/login" className="text-red-500 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  ACCEDE
                </Link>
                <Link href="/registro" className="text-red-500 hover:text-red-600 px-3 py-2 text-sm font-medium">
                  REGÍSTRATE
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

