'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces = [
    { nombre: 'Servicios', href: '#servicios' },
    { nombre: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-barber-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo recuperado */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-barber-red to-barber-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">BD</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-barber-white group-hover:text-barber-gold transition-colors">
              Barbershop Damas
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                className="text-barber-white/70 hover:text-barber-white font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-barber-red after:transition-all hover:after:w-full"
              >
                {enlace.nombre}
              </a>
            ))}
            <a
              href="tel:+34684113157"
              className="bg-barber-gold hover:bg-barber-gold-hover text-barber-dark font-semibold px-6 py-2.5 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-barber-gold/25"
            >
              Reservar
            </a>
          </div>

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Abrir menú de navegación"
          >
            <span className={`w-6 h-0.5 bg-barber-white transition-all duration-300 ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-barber-white transition-all duration-300 ${menuAbierto ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-barber-white transition-all duration-300 ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuAbierto ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pb-6 pt-2 bg-barber-dark/95 backdrop-blur-xl border-t border-white/5 flex flex-col gap-4">
          {enlaces.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.href}
              onClick={() => setMenuAbierto(false)}
              className="text-barber-white/70 hover:text-barber-white font-medium py-2 transition-colors"
            >
              {enlace.nombre}
            </a>
          ))}
          <a
            href="tel:+34684113157"
            onClick={() => setMenuAbierto(false)}
            className="bg-barber-gold hover:bg-barber-gold-hover text-barber-dark font-semibold px-6 py-3 rounded-lg text-center transition-all"
          >
            Reservar Cita
          </a>
        </div>
      </div>
    </nav>
  );
}