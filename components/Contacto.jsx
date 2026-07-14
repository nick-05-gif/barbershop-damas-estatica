export default function Contacto() {
  return (
    <section id="contacto" className="py-20 sm:py-28 bg-barber-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14 sm:mb-20">
          <span className="text-barber-red font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
            Encuéntranos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-barber-white mb-4">
            Contacto
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-barber-red to-barber-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Columna izquierda: fachada + tarjetas de info */}
          <div className="flex flex-col gap-6">

            {/* Foto de la fachada */}
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64">
              <img
                src="/images/local-fachada.jpg"
                alt="Fachada de Barbershop Damas en Zaragoza"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-barber-dark/70 via-transparent to-transparent flex items-end p-5">
                <p className="text-barber-white font-semibold text-sm">
                  📍 Avda. Gertrudis Gómez de Avellaneda, 57 · Zaragoza
                </p>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-start gap-4 bg-barber-gray/40 border border-white/5 rounded-2xl p-6">
              <div className="w-12 h-12 bg-barber-red/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-barber-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-barber-white mb-1">Dirección</h3>
                <p className="text-barber-white/60 leading-relaxed">
                  Avda. Gertrudis Gómez de Avellaneda, Nº 57<br />Zaragoza
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <a
              href="tel:+34976240378"
              className="flex items-start gap-4 bg-barber-gray/40 border border-white/5 rounded-2xl p-6 transition-all hover:bg-barber-gray/60 hover:border-barber-gold/20 group"
            >
              <div className="w-12 h-12 bg-barber-gold/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-barber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-barber-white mb-1">Teléfono</h3>
                <p className="text-barber-gold text-lg font-medium group-hover:underline">976 24 03 78</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/barbershop_damas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-barber-gray/40 border border-white/5 rounded-2xl p-6 transition-all hover:bg-barber-gray/60 hover:border-barber-red/20 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-barber-white mb-1">Instagram</h3>
                <p className="text-pink-400 font-medium group-hover:underline">@barbershop_damas</p>
              </div>
            </a>

            {/* Horarios */}
            <div className="bg-barber-gray/40 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-barber-blue/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-barber-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-barber-white">Horario</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-barber-white/60">
                  <span>Lunes a Viernes</span>
                  <span className="text-barber-white font-medium">09:30 – 21:30</span>
                </div>
                <div className="flex justify-between text-barber-white/60">
                  <span>Sábados</span>
                  <span className="text-barber-white font-medium">09:30 – 20:00</span>
                </div>
                <div className="flex justify-between text-barber-white/60">
                  <span>Domingos</span>
                  <span className="text-barber-white font-medium">10:00 – 20:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: mapa */}
          <div className="rounded-2xl overflow-hidden border border-white/5 h-[400px] lg:h-full lg:min-h-[500px]">
            <iframe
              title="Ubicación de Barbershop Damas en Zaragoza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.41041322207815!2d-0.8911446288444048!3d41.67217832454551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5915b9097d318b%3A0xfd5fe3d3fe2159e7!2sBarber%20Shop%20Damas!5e1!3m2!1ses!2ses!4v1780774426812!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
