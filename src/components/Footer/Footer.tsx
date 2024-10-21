import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 w-screen">
      <div className="container mx-auto flex flex-row justify-center gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Bross Store</h2>
          <p className="text-sm text-gray-400 max-w-[300px]">
            Tu tienda de confianza para productos de calidad. Ofrecemos envíos
            rápidos y una experiencia de compra segura.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
          <ul className="text-sm space-y-2">
            <li>
              <i className="fas fa-shipping-fast text-yellow-400"></i> Envío Gratis
              en órdenes superiores a $5000
            </li>
            <li>
              <i className="fas fa-headset text-yellow-400"></i> Soporte 24/7
            </li>
            <li>
              <i className="fas fa-undo-alt text-yellow-400"></i> Garantía de
              devolución de 30 días
            </li>
            <li>
              <i className="fas fa-lock text-yellow-400"></i> Pago 100% Seguro
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contacto</h3>
          <ul className="text-sm space-y-2">
            <li>
              <i className="fas fa-envelope text-yellow-400"></i>{" "}
              contacto@brossstore.com
            </li>
            <li>
             +54 11 1234-5678
            </li>
            <li>
              <i className="fas fa-map-marker-alt text-yellow-400"></i> Buenos
              Aires, Argentina
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; 2024 Bross Store. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
