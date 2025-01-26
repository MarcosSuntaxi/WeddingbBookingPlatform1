import FormularioLogin from "../components/FormularioLogin"

export default function PaginaLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/images/wedding-login-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <FormularioLogin />
    </div>
  )
}

