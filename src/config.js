// src/config.js

// WhatsApp helper
export const wa = (message = "") =>
  `https://wa.me/56935626296?text=${encodeURIComponent(message)}`;

// Datos del negocio (opcional, por si quieres centralizar textos)
export const BUSINESS = {
  name: "Dulces Secretos",
  email: "dulcessecretos26@gmail.com",
  phoneDisplay: "+56 9 3562 6296",
  phoneE164: "+56935626296",
  address: "Cancagua con Gerónimo de Alderete, La Florida, Santiago",
  site: "https://dulcessecretos.online",
};

// Access Key de Web3Forms 
export const WEB3FORMS_ACCESS_KEY = "d1264d3a-2999-4432-86ed-d714c6b829d2";
