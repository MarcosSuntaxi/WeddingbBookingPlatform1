"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type Usuario = {
  id: string
  nombre: string
  email: string
}

export default function PanelUsuario() {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    fetchPerfilUsuario()
  }, [])

  const fetchPerfilUsuario = async () => {
    try {
      const response = await fetch("/api/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setUsuario(data)
        setNombre(data.nombre)
        setEmail(data.email)
      } else {
        setError("Error al obtener el perfil de usuario")
      }
    } catch (err) {
      setError("Ocurrió un error al obtener el perfil de usuario")
    }
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch(`/api/users/${usuario?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ nombre, email, password }),
      })
      if (response.ok) {
        fetchPerfilUsuario() // Actualizar datos del usuario
      } else {
        setError("Error al actualizar el perfil")
      }
    } catch (err) {
      setError("Ocurrió un error al actualizar el perfil")
    }
  }

  if (!usuario) {
    return <div>Cargando...</div>
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Perfil de Usuario</CardTitle>
        <CardDescription>Ver y actualizar tu información de perfil</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpdate}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Nueva Contraseña (opcional)</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit">Actualizar Perfil</Button>
      </CardFooter>
    </Card>
  )
}


