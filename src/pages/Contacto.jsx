"use client"


import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  Truck,
  CreditCard,
} from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    setTimeout(() => {
      // Crear mensaje para WhatsApp
      const mensaje = `
🍰 *Nueva Consulta - Dulces Secretos*

👤 *Nombre:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.telefono}
📋 *Tipo de Consulta:* ${formData.tipoConsulta}

💬 *Mensaje:*
${formData.mensaje}
      `.trim()

      const phoneNumber = "56935626296" 

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`

      window.open(whatsappUrl, "_blank")

      setSubmitStatus("success")
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoConsulta: "",
        mensaje: "",
      })
      setIsSubmitting(false)

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  const handleWhatsAppDirect = () => {
    const phoneNumber = "56935626296"
    const message = "¡Hola! Me gustaría hacer una consulta sobre sus productos 🍰"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const tiposConsulta = [
    "Pedido personalizado",
    "Información de productos",
    "Cursos de repostería",
    "Precios y cotizaciones",
    "Eventos y celebraciones",
    "Reclamos o sugerencias",
    "Otro",
  ]

  const horarios = [
    { dia: "Lunes a Viernes", horario: "8:00 AM - 6:00 PM" },
    { dia: "Sábados", horario: "9:00 AM - 4:00 PM" },
    { dia: "Domingos", horario: "10:00 AM - 2:00 PM" },
    { dia: "Festivos", horario: "Cerrado" },
  ]

  const faqItems = [
    {
      pregunta: "¿Con cuánto tiempo debo hacer mi pedido?",
      respuesta: "Para pedidos personalizados recomendamos mínimo 48 horas. Para productos del catálogo, 24 horas.",
    },
    {
      pregunta: "¿Hacen entregas a domicilio?",
      respuesta: "Sí, hacemos entregas en toda la ciudad. El costo varía según la zona de entrega.",
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta: "Aceptamos efectivo, transferencias bancarias, Nequi, Daviplata y tarjetas de crédito/débito.",
    },
    {
      pregunta: "¿Pueden hacer tortas sin azúcar o veganas?",
      respuesta:
        "¡Por supuesto! Tenemos opciones especiales para diabéticos, veganos y personas con alergias alimentarias.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[url('/damaris.jpg')] bg-cover bg-top text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contáctanos 📞</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Estamos aquí para endulzar tu día. Contáctanos para pedidos personalizados, consultas o cualquier duda que
            tengas.
          </p>
          <button
            onClick={handleWhatsAppDirect}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
          >
            <MessageCircle size={24} />
            WhatsApp Directo
          </button>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información Principal */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Phone className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+57 300 123 4567</p>
                    <p className="text-sm text-gray-500">Llamadas y WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@dulcessecretos.com</p>
                    <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                    <p className="text-gray-600">Calle 123 #45-67</p>
                    <p className="text-gray-600">Barrio Centro, Ciudad</p>
                    <p className="text-sm text-gray-500">Punto de recogida disponible</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Horarios de Atención</h3>
                    <div className="space-y-2">
                      {horarios.map((horario, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{horario.dia}:</span>
                          <span className="text-gray-800 font-medium">{horario.horario}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/dulcessecretos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com/dulcessecretos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <Facebook size={24} />
                  </a>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="bg-green-500 text-white p-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <MessageCircle size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>¡Mensaje enviado! Te contactaremos pronto.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="tipoConsulta" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Consulta *
                  </label>
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    {tiposConsulta.map((tipo, index) => (
                      <option key={index} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Información Importante</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pedidos Anticipados</h3>
              <p className="text-gray-600">
                Para garantizar la mejor calidad, recomendamos hacer pedidos con 48 horas de anticipación para productos
                personalizados.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Entregas</h3>
              <p className="text-gray-600">
                Realizamos entregas en toda la ciudad. Costo de envío desde $5.000 según la zona. También puedes recoger
                en nuestro punto.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Métodos de Pago</h3>
              <p className="text-gray-600">
                Aceptamos efectivo, transferencias, Nequi, Daviplata y tarjetas. Para pedidos grandes, aceptamos abonos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-start gap-2">
                  <AlertCircle className="text-pink-600 mt-1 flex-shrink-0" size={20} />
                  {item.pregunta}
                </h3>
                <p className="text-gray-600 ml-7">{item.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Placeholder */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Nuestra Ubicación</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-gray-500" size={48} />
              <p className="text-gray-600 text-lg">Calle 123 #45-67, Barrio Centro</p>
              <p className="text-gray-500">Mapa interactivo próximamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Tienes una Pregunta Urgente?</h2>
          <p className="text-xl mb-8">Contáctanos directamente por WhatsApp para una respuesta inmediata</p>

          <button
            onClick={handleWhatsAppDirect}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
          >
            <MessageCircle size={24} />
            Chatear Ahora
          </button>
        </div>
      </section>
    </div>
  )
}
