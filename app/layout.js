import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Barbershop Damas | Tu barbería en Zaragoza',
  description: 'Barbershop Damas, tu barbería de confianza en Zaragoza. Cortes modernos, afeitado clásico y los mejores profesionales.',
  metadataBase: new URL('https://barbershop-damas.vercel.app'),
  openGraph: {
    title: 'Barbershop Damas | Tu barbería en Zaragoza',
    description: 'Barbershop Damas, tu barbería de confianza en Zaragoza. Cortes modernos, afeitado clásico y los mejores profesionales.',
    url: 'https://barbershop-damas.vercel.app',
    siteName: 'Barbershop Damas',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barbershop Damas | Tu barbería en Zaragoza',
    description: 'Barbershop Damas, tu barbería de confianza en Zaragoza.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-barber-dark text-barber-white font-sans">
        {children}
      </body>
    </html>
  );
}
