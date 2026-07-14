import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Barbershop Damas',
  description: 'Información sobre el tratamiento de datos personales en Barbershop Damas.',
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-barber-dark pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-barber-white/40 hover:text-barber-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold text-barber-white mb-8">Política de Privacidad</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-barber-white/70 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Responsable del tratamiento</h2>
            <p>El responsable del tratamiento de los datos personales es Barbershop Damas, con domicilio en Avda. Gertrudis Gómez de Avellaneda, Nº 57, 50018 Zaragoza.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Recogida de datos en esta web</h2>
            <p>Esta web es una página de presentación de carácter puramente informativo. <strong className="text-barber-white">No dispone de formularios de contacto, formularios de reserva ni ningún otro mecanismo que recopile datos personales de forma automática.</strong></p>
            <p className="mt-2">El único canal de contacto disponible es el <strong className="text-barber-white">teléfono</strong>. Cualquier tratamiento de datos personales se realizará exclusivamente en el marco de las comunicaciones telefónicas que el usuario inicie voluntariamente.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Finalidad del tratamiento</h2>
            <p>Los datos facilitados por vía telefónica se utilizan exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Atender la consulta o solicitud de cita del cliente.</li>
              <li>Gestionar y confirmar la cita acordada durante la llamada.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Base legal</h2>
            <p>La base legal para el tratamiento de los datos es el consentimiento del interesado, manifestado al contactar telefónicamente con el establecimiento, así como la ejecución de un contrato de prestación de servicios.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Conservación de datos</h2>
            <p>Los datos personales se conservarán durante el tiempo necesario para gestionar la cita y, una vez finalizada, durante los plazos legalmente establecidos para atender posibles responsabilidades.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-barber-white">Derechos del usuario</h2>
            <p>El usuario puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición al tratamiento de sus datos enviando un email a <a href="mailto:contacto@barbershopdamas.com" className="text-barber-gold hover:underline">contacto@barbershopdamas.com</a> o dirigiéndose personalmente a nuestro establecimiento.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
