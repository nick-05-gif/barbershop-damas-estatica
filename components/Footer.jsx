export default function Footer() {
  return (
    <footer className="bg-barber-gray/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-6 text-sm text-barber-white/40">
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a href="tel:+34976240378">Reservar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
