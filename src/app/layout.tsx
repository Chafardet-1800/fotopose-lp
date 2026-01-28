import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import MobileMenu from "../components/base/MobileMenu";
import { MenuSection } from "../components/base/interfaces";
import DesktopMenu from "../components/base/DesktopMenu";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Organizacion Fotopose Venezuela",
  description: "Cursos de modelaje y maquillaje profesionales en Venezuela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Definimos las secciones del menú
  const menu: MenuSection[] = [
    {
      title: "Cursos",
      items: [
        {
          label: "Belleza",
          descripcion:
            "Explora nuestras opciones de cursos de maquillaje y más.",
          href: "/course",
          slug: "aesthetics",
        },
        {
          label: "Modelaje",
          descripcion:
            "Descubre todo sobre el modelaje profesional que podemos enseñarte.",
          href: "/course",
          slug: "modeling",
        },
        {
          label: "Marketing",
          descripcion:
            "Aprende a manejar tus redes sociales de manera profesional.",
          href: "/course",
          slug: "marketing",
        },
      ],
    },
    {
      title: "Servicios",
      items: [
        {
          label: "Consultoría",
          descripcion: "Explora nuestras opciones de Consultoría",
          href: "/services",
          slug: "modeling",
        },
        {
          label: "Desarrollo a Medida",
          descripcion: "Explora nuestras opciones de Desarrollo a Medida",
          href: "/services",
          slug: "photography",
        },
      ],
    },
  ];

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <header className="fixed top-0 z-50 w-full border-0 border-black bg-black/70 border-b backdrop-blur-md">
          <div className="relative w-full px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logos/fotopose_logo.png"
                alt="Logo de Fotopose venezuela"
                width={70}
                height={30}
                priority
              />
            </Link>

            {/* Navegación */}
            <DesktopMenu sections={menu} />

            {/* Mobile Menu */}
            <MobileMenu sections={menu} />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
