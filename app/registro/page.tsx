import FormularioRegistro from "../components/FormularioRegistro"

export default function PaginaRegistro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/images/wedding-register-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <FormularioRegistro />
    </div>
  )
}

