"use client"

import { Link } from "react-router-dom"
import { Heart, Star, Users, Award, BookOpen, ShoppingBag, MessageCircle } from "lucide-react"

export default function Nosotros() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "573001234567" // Reemplaza con el número real
    const message = "¡Hola Damaris y Mailyn! Me encanta su historia y me gustaría conocer más sobre Dulces Secretos 🍰❤️"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const valores = [
    {
      icono: <Heart className="text-pink-600" size={32} />,
      titulo: "Amor en cada creación",
      descripcion: "Cada producto lleva el cariño y dedicación que aprendimos en familia",
    },
    {
      icono: <Star className="text-yellow-500" size={32} />,
      titulo: "Calidad sin compromisos",
      descripcion: "Usamos solo los mejores ingredientes, como nos enseñaron desde pequeñas",
    },
    {
      icono: <Users className="text-blue-600" size={32} />,
      titulo: "Familia extendida",
      descripcion: "Cada cliente se convierte en parte de nuestra familia Dulces Secretos",
    },
    {
      icono: <Award className="text-purple-600" size={32} />,
      titulo: "Tradición e innovación",
      descripcion: "Combinamos recetas tradicionales venezolanas con técnicas modernas",
    },
  ]

  const logros = [
    { numero: "4+", descripcion: "Años en Chile", icono: "🇨🇱" },
    { numero: "1000+", descripcion: "Clientes Felices", icono: "😊" },
    { numero: "500+", descripcion: "Tortas Creadas", icono: "🎂" },
    { numero: "50+", descripcion: "Estudiantes de Cursos", icono: "📚" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestra Historia ❤️</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Una historia de amor, perseverancia y dulces sueños que trasciende fronteras
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-lg">
              <strong>Damaris y Mailyn Caballero</strong> - Madre e hija unidas por la pasión de endulzar vidas
            </p>
          </div>
        </div>
      </section>

      {/* Introducción Personal */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Conoce a las Creadoras</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Somos <strong>Damaris y Mailyn Caballero</strong>, una madre e hija venezolanas que compartimos algo más
                que lazos familiares: compartimos el amor por la repostería y la determinación de convertir cada
                obstáculo en una oportunidad.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestra historia es de resistencia, reinvención y, sobre todo, de nunca renunciar a los sueños, sin
                importar cuán lejos nos lleve el camino.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/productos"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2 justify-center"
                >
                  <ShoppingBag size={20} />
                  Ver Nuestras Creaciones
                </Link>
                <button
                  onClick={handleWhatsAppContact}
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={20} />
                  Conocernos Mejor
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Placeholder para foto de Damaris y Mailyn */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-8 text-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Damaris y Mailyn Caballero - Fundadoras de Dulces Secretos"
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 italic">Damaris y Mailyn Caballero</p>
                <p className="text-sm text-gray-500">Fundadoras de Dulces Secretos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Cronológica */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestro Camino</h2>

          <div className="space-y-12">
            {/* Venezuela - Los Inicios */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-yellow-100 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">🇻🇪</div>
                  <h3 className="text-xl font-bold text-gray-800">Venezuela</h3>
                  <p className="text-gray-600">Los Primeros Años</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Donde Todo Comenzó</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En Venezuela, la repostería era más que un hobby para nosotras; era una tradición familiar que pasaba
                  de generación en generación. Damaris aprendió los secretos de la cocina de su abuela, y Mailyn creció
                  entre aromas de vainilla y chocolate, absorbiendo cada técnica, cada receta.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Teníamos un pequeño emprendimiento que nos llenaba de alegría. Cada torta era una obra de arte, cada
                  cliente una nueva historia. Pero la vida tenía otros planes para nosotras...
                </p>
              </div>
            </div>

            {/* La Migración */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">✈️</div>
                  <h3 className="text-xl font-bold text-gray-800">La Migración</h3>
                  <p className="text-gray-600">Un Nuevo Horizonte</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Cuando Todo Cambió</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La situación en Venezuela se volvió insostenible. La dictadura y la crisis económica nos obligaron a
                  tomar la decisión más difícil de nuestras vidas: dejar atrás todo lo que conocíamos y empezar de cero
                  en un país desconocido.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Con el corazón partido pero lleno de esperanza, empacamos nuestros sueños y algunas recetas
                  familiares. Chile se convirtió en nuestro destino, en nuestra nueva oportunidad.
                </p>
              </div>
            </div>

            {/* Llegada a Chile y Pandemia */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-red-100 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">🦠</div>
                  <h3 className="text-xl font-bold text-gray-800">2020</h3>
                  <p className="text-gray-600">Pandemia y Desafíos</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">El Momento Más Difícil</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Llegamos a Chile en 2020, justo cuando el mundo se detenía por la pandemia. Era como si el universo
                  nos pusiera a prueba una vez más. Sin trabajo, sin conocidos, en un país nuevo y con restricciones que
                  limitaban todo.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Pero en los momentos más oscuros es cuando brilla más fuerte la luz de la determinación. Fue entonces
                  cuando decidimos que era hora de volver a nuestras raíces, a lo que realmente sabíamos hacer: crear
                  dulces momentos para otros.
                </p>
              </div>
            </div>

            {/* El Renacimiento */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-green-100 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">🍰</div>
                  <h3 className="text-xl font-bold text-gray-800">Dulces Secretos</h3>
                  <p className="text-gray-600">Nace el Sueño</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">El Renacer de un Sueño</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Con una pequeña cocina prestada y los ahorros que nos quedaban, decidimos apostar todo a Dulces
                  Secretos. Comenzamos desde cero: nosotras mismas horneábamos, decorábamos, empacábamos y entregábamos
                  cada pedido.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Recorrimos las calles de Santiago con nuestras creaciones, tocando puertas, ofreciendo muestras
                  gratis, construyendo confianza cupcake por cupcake, sonrisa por sonrisa.
                </p>
              </div>
            </div>

            {/* El Crecimiento */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-purple-100 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-gray-800">Crecimiento</h3>
                  <p className="text-gray-600">Boca a Boca</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">El Poder del Boca a Boca</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La calidad habla por sí sola. Cada cliente satisfecho se convertía en nuestro mejor vendedor. Las
                  recomendaciones comenzaron a llegar, los pedidos aumentaron, y poco a poco, Dulces Secretos se
                  convirtió en un nombre conocido en Santiago.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  No fue fácil. Hubo noches sin dormir, madrugadas horneando, días enteros decorando. Pero cada sonrisa
                  de un cliente, cada "¡está delicioso!" nos recordaba por qué valía la pena cada sacrificio.
                </p>
              </div>
            </div>

            {/* El Presente */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-pink-100 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-gray-800">Hoy</h3>
                  <p className="text-gray-600">Sueño Cumplido</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestro Presente</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hoy, Dulces Secretos tiene su propia repostería. Hemos crecido, pero nunca hemos olvidado nuestras
                  raíces. Seguimos poniendo el mismo amor en cada creación, la misma dedicación en cada detalle.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ahora también compartimos nuestro conocimiento a través de cursos presenciales, enseñando a otros a
                  perseguir sus propios sueños dulces. Porque creemos que el conocimiento, como el amor, se multiplica
                  cuando se comparte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Lo Que Nos Define</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{valor.icono}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros y Números */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Logros</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {logros.map((logro, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{logro.icono}</div>
                <div className="text-4xl font-bold mb-2">{logro.numero}</div>
                <p className="text-lg">{logro.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl mb-8">
              Y esto es solo el comienzo. Cada día trabajamos para seguir creciendo y endulzando más vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Galería de Momentos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Momentos Especiales</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder para fotos del proceso */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=250&width=400"
                alt="Damaris y Mailyn trabajando en la cocina"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">En la Cocina</h3>
                <p className="text-gray-600 text-sm">Madre e hija trabajando juntas, como siempre</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=250&width=400"
                alt="Primera entrega en Santiago"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Primeras Entregas</h3>
                <p className="text-gray-600 text-sm">Recorriendo Santiago con nuestras creaciones</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=250&width=400"
                alt="Repostería actual de Dulces Secretos"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Nuestra Repostería</h3>
                <p className="text-gray-600 text-sm">El sueño hecho realidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la Acción */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sé Parte de Nuestra Historia</h2>
          <p className="text-xl text-gray-600 mb-8">
            Cada cliente que elige Dulces Secretos se convierte en parte de nuestra familia y nuestra historia de
            superación.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Prueba Nuestras Creaciones</h3>
              <p className="text-gray-600 mb-6">
                Cada producto lleva años de experiencia, amor y la determinación de dos mujeres que nunca se rindieron.
              </p>
              <Link
                to="/productos"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
              >
                <ShoppingBag size={20} />
                Ver Productos
              </Link>
            </div>

            <div className="bg-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Aprende Con Nosotras</h3>
              <p className="text-gray-600 mb-6">
                Compartimos nuestro conocimiento en cursos presenciales. Aprende las técnicas que nos han llevado al
                éxito.
              </p>
              <Link
                to="/cursos"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
              >
                <BookOpen size={20} />
                Ver Cursos
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle size={24} />
              Conocernos Personalmente
            </button>
          </div>
        </div>
      </section>

      {/* Mensaje Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Un Mensaje de Corazón</h2>
          <blockquote className="text-xl italic leading-relaxed mb-8">
            "Nuestra historia no es solo sobre repostería. Es sobre resistencia, sobre el poder de los sueños y sobre
            cómo el amor puede endulzar incluso los momentos más amargos. Cada vez que eliges Dulces Secretos, no solo
            compras un producto; apoyas una historia de superación y te conviertes en parte de nuestro sueño americano."
          </blockquote>
          <p className="text-lg">
            <strong>Con amor,</strong>
            <br />
            Damaris y Mailyn Caballero
          </p>
        </div>
      </section>
    </div>
  )
}
