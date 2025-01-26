"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Usuario = {
  id: string
  nombre: string
  email: string
  rol: string
}

export default function PanelAdmin() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetchUsuarios()
  }, [])

  const fetchUsuarios = async () => {
    try {
      const response = await fetch("/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setUsuarios(data)
      } else {
        setError("Error al obtener la lista de usuarios")
      }
    } catch {
      setError("Ocurrió un error al obtener la lista de usuarios")
    }
  }

  const handleUpdate = async (id: string, usuarioActualizado: Partial<Usuario>) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(usuarioActualizado),
      })
      if (response.ok) {
        fetchUsuarios()
      } else {
        setError("Error al actualizar el usuario")
      }
    } catch {
      setError("Ocurrió un error al actualizar el usuario")
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      if (response.ok) {
        fetchUsuarios()
      } else {
        setError("Error al eliminar el usuario")
      }
    } catch {
      setError("Ocurrió un error al eliminar el usuario")
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usuarios.map((usuario) => (
            <TableRow key={usuario.id}>
              <TableCell>{usuario.nombre}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>{usuario.rol}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdate(usuario.id, { nombre: "Nombre Actualizado" })}>Actualizar</Button>
                <Button variant="destructive" onClick={() => handleDelete(usuario.id)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

