"use client";

import { useState } from "react";
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
} from "lucide-react";
import { wa, WEB3FORMS_ACCESS_KEY, BUSINESS } from "../config";

export default function Contacto() {
  // ---------- SEO (React 19 Document Metadata) ----------
  const SEO = (
    <>
      <title>Contacto | Dulces Secretos — Repostería en La Florida, Santiago</title>
      <meta
        name="description"
        content="Contáctanos por WhatsApp o correo. Dirección: Cancagua con Gerónimo de Alderete, La Florida. Pedidos personalizados de tortas, postres y cursos."
      />
      <link rel="canonical" href="https://dulcessecretos.online/contacto" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dulces Secretos" />
      <meta property="og:locale" content="es_CL" />
      <meta
        property="og:title"
        content="Contacto | Dulces Secretos — Repostería en La Florida, Santiago"
      />
      <meta
        property="og:description"
        content="Escríbenos por WhatsApp o correo. Hacemos tortas y postres personalizados en La Florida, Santiago."
      />
      <meta property="og:url" content="https://dulcessecretos.online/contacto" />
      <meta property="og:image" content="https://dulcessecretos.online/fondoweb1.jpg" />
      <meta property="og:image:alt" content="Dulces Secretos — Repostería artesanal" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Contacto | Dulces Secretos — Repostería en La Florida, Santiago"
      />
      <meta
        name="twitter:description"
        content="Pedidos personalizados por WhatsApp o correo. La Florida, Santiago."
      />
      <meta name="twitter:image" content="https://dulcessecretos.online/fondoweb1.jpg" />
    </>
  );

  // ---------- Derivados ----------
  const EMAIL_TO = BUSINESS.email;
  const TELEFONO_VISIBLE = BUSINESS.phoneDisplay;
  const TELEFONO_E164 = BUSINESS.phoneE164;
  const DIRECCION_TXT = BUSINESS.address;

  const MAPS_Q = encodeURIComponent("Cancagua con Geronimo de Alderete, La Florida, Santiago");
  const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_Q}&output=embed`;
  const MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_Q}`;

  const IG_URL =
    "https://www.instagram.com/dulces_secretos.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const FB_URL =
    "https://l.instagram.com/?u=https%3A%2F%2Fdulcessecretos.cl%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafLMmFf2kfm5e9Rg2Sb5i6vMbPi2hCDXpSlmqxaMrhWWfwJDMwjTSeOJr3SBw_aem_d6QdmQbQoShyVrqOBGl8WQ&e=AT3WsVYlZZIp0ueVv0vnyXOCV9hJ76vgeDocNFn2ShT9QgbbAwN_JwS1-_y79FdyjDQ4fgeXuMF2bkgkx7hyZ8vidONwoMEP5zPMtpQ";

  // ---------- Formulario ----------
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
    // honeypot anti-bots (debe permanecer vacío)
    botcheck: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null
  const [submitMsg, setSubmitMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envío con Web3Forms (sin backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitStatus(null);
    setSubmitMsg("");
    setIsSubmitting(true);

    // Validación mínima en cliente
    const emailOk = /^\S+@\S+\.\S+$/.test(formData.email);
    if (
      !formData.nombre.trim() ||
      !emailOk ||
      !formData.telefono.trim() ||
      !formData.tipoConsulta ||
      !formData.mensaje.trim()
    ) {
      setSubmitStatus("error");
      setSubmitMsg("Revisa los campos obligatorios y que el email sea válido.");
      setIsSubmitting(false);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "REEMPLAZA_CON_TU_ACCESS_KEY") {
      setSubmitStatus("error");
      setSubmitMsg("Falta configurar el WEB3FORMS_ACCESS_KEY en src/config.js");
      setIsSubmitting(false);
      return;
    }

    // Construir payload para Web3Forms
    const subject = `Nueva consulta — ${formData.tipoConsulta}`;
    const message = `
🍰 Nueva Consulta - Dulces Secretos

👤 Nombre: ${formData.nombre}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.telefono}
📋 Tipo de Consulta: ${formData.tipoConsulta}

💬 Mensaje:
${formData.mensaje}
    `.trim();

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "Dulces Secretos (Web)",
      subject,
      // Web3Forms envía al correo asociado a la key.
      // reply_to permite responder directamente al cliente.
      reply_to: formData.email,
      to: EMAIL_TO, // opcional: algunos planes permiten definirlo; si no, se usa el asociado a la key
      // Campos visibles en el correo:
      nombre: formData.nombre,
      telefono: formData.telefono,
      tipoConsulta: formData.tipoConsulta,
      message, // cuerpo legible
      // Anti-bots:
      botcheck: formData.botcheck || "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (json.success) {
        setSubmitStatus("success");
        setSubmitMsg("¡Mensaje enviado! Te responderemos pronto a tu correo.");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          tipoConsulta: "",
          mensaje: "",
          botcheck: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMsg(json.message || "No se pudo enviar el mensaje. Intenta nuevamente.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setSubmitMsg("Error de red al enviar el formulario. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
      // Ocultar mensaje después de unos segundos
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMsg("");
      }, 7000);
    }
  };

  const handleWhatsAppDirect = () => {
    const message = "¡Hola! Me gustaría hacer una consulta sobre sus productos 🍰";
    window.open(wa(message), "_blank");
  };

  const tiposConsulta = [
    "Pedido personalizado",
    "Información de productos",
    "Cursos de repostería",
    "Precios y cotizaciones",
    "Eventos y celebraciones",
    "Reclamos o sugerencias",
    "Otro",
  ];

  const horarios = [
    { dia: "Lunes a Viernes", horario: "09:00 - 19:00" },
    { dia: "Sábados", horario: "09:00 - 15:00" },
    { dia: "Domingos y Festivos", horario: "Cerrado" },
  ];

  const faqItems = [
    {
      pregunta: "¿Con cuánto tiempo debo hacer mi pedido?",
      respuesta:
        "Para pedidos personalizados recomendamos mínimo 48 horas. Para productos del catálogo, 24 horas.",
    },
    {
      pregunta: "¿Hacen entregas a domicilio?",
      respuesta:
        "Sí, entregamos en La Florida y comunas cercanas. El costo varía según la zona.",
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta: "Aceptamos efectivo, transferencias bancarias y tarjetas de crédito/débito.",
    },
    {
      pregunta: "¿Pueden hacer tortas sin azúcar o veganas?",
      respuesta:
        "Sí, tenemos opciones especiales (sin azúcar, veganas y para alergias). Indícanos tus necesidades en el pedido.",
    },
  ];

  return (
    <>
      {SEO}

      <div className="min-h-screen bg-gray-50">
        {/* Hero con overlay para legibilidad */}
        <section className="relative bg-[url('/damaris.jpg')] bg-cover bg-top text-white py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Contáctanos 📞
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Estamos aquí para endulzar tu día. Pedidos personalizados, consultas o cualquier duda que tengas.
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
                      <p className="text-gray-600">
                        <a className="hover:underline" href={`tel:${TELEFONO_E164}`}>{TELEFONO_VISIBLE}</a>
                      </p>
                      <p className="text-sm text-gray-500">Llamadas y WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a className="hover:underline" href={`mailto:${EMAIL_TO}`}>{EMAIL_TO}</a>
                      </p>
                      <p className="text-sm text-gray-500">Respondemos dentro de 24 horas hábiles</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                      <p className="text-gray-600">{DIRECCION_TXT}</p>
                      <a
                        href={MAPS_DIR}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 font-medium hover:underline"
                      >
                        Cómo llegar
                      </a>
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
                      href={IG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                      aria-label="Instagram de Dulces Secretos"
                      title="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href={FB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                      aria-label="Facebook de Dulces Secretos"
                      title="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="bg-green-500 text-white p-3 rounded-full hover:shadow-lg transition-shadow duration-300"
                      aria-label="WhatsApp de Dulces Secretos"
                      title="WhatsApp"
                    >
                      <MessageCircle size={24} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Formulario de Contacto (Web3Forms) */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-100 border border-green-400 text-green-700"
                        : "bg-red-100 border border-red-400 text-red-700"
                    }`}
                  >
                    {submitStatus === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span>{submitMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* honeypot anti-bots (oculto) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

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
                        autoComplete="name"
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
                        placeholder="+56 9 XXXX XXXX"
                        autoComplete="tel"
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
                      autoComplete="email"
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
                      {[
                        "Pedido personalizado",
                        "Información de productos",
                        "Cursos de repostería",
                        "Precios y cotizaciones",
                        "Eventos y celebraciones",
                        "Reclamos o sugerencias",
                        "Otro",
                      ].map((tipo, index) => (
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Información Importante
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pedidos Anticipados</h3>
                <p className="text-gray-600">
                  Para garantizar la mejor calidad, recomendamos hacer pedidos con 48 horas de anticipación para productos personalizados.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Entregas</h3>
                <p className="text-gray-600">
                  Realizamos entregas en La Florida y comunas cercanas. También puedes retirar en nuestro punto.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Métodos de Pago</h3>
                <p className="text-gray-600">
                  Efectivo, transferencia bancaria y tarjetas de crédito/débito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  pregunta: "¿Con cuánto tiempo debo hacer mi pedido?",
                  respuesta:
                    "Para pedidos personalizados recomendamos mínimo 48 horas. Para productos del catálogo, 24 horas.",
                },
                {
                  pregunta: "¿Hacen entregas a domicilio?",
                  respuesta:
                    "Sí, entregamos en La Florida y comunas cercanas. El costo varía según la zona.",
                },
                {
                  pregunta: "¿Qué métodos de pago aceptan?",
                  respuesta:
                    "Aceptamos efectivo, transferencias bancarias y tarjetas de crédito/débito.",
                },
                {
                  pregunta: "¿Pueden hacer tortas sin azúcar o veganas?",
                  respuesta:
                    "Sí, tenemos opciones especiales (sin azúcar, veganas y para alergias). Indícanos tus necesidades en el pedido.",
                },
              ].map((item, index) => (
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

        {/* Mapa interactivo */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Nuestra Ubicación
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-96">
                <iframe
                  title="Mapa Dulces Secretos"
                  src={MAPS_EMBED}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 bg-gray-50 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-gray-800 font-semibold">{DIRECCION_TXT}</p>
                  <p className="text-sm text-gray-600">Punto de retiro disponible</p>
                </div>
                <a
                  href={MAPS_DIR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">¿Tienes una Pregunta Urgente?</h2>
            <p className="text-xl mb-8">
              Contáctanos directamente por WhatsApp para una respuesta inmediata
            </p>

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
    </>
  );
}
