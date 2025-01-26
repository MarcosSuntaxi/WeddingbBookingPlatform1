"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FormularioLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      // Aquí iría la lógica de autenticación
      console.log("Iniciando sesión con:", email, password)
      // Por ahora, simplemente redirigimos al panel de usuario
      router.push("/panel-usuario")
    } catch (err) {
      setError("Ocurrió un error. Por favor, intenta de nuevo.")
    }
  }

  return (
    <Card className="w-[350px] bg-white bg-opacity-90 backdrop-blur-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Bienvenido</CardTitle>
        <CardDescription className="text-center">Ingresa a tu cuenta para gestionar tu boda</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-pink-500 hover:bg-pink-600" onClick={handleSubmit}>
          Iniciar Sesión
        </Button>
      </CardFooter>
    </Card>
  )
}

