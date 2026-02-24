"use client";
import Image from "next/image";
import InscriptionForm from "./InscriptionForm";
import { useState } from "react";
import { ChevronDown, Target, Smartphone, TrendingUp } from "lucide-react";

export default function MarketingInscriptionView() {
  const [openSection, setOpenSection] = useState<number>(0);

  const informationImages: string[] = [
    "/images/pictures/ins_maquillaje_automaquillaje.png",
    "/images/pictures/ins_maquillaje_avanzado.png",
    "/images/pictures/ins_maquillaje_intensivo.png",
    "/images/pictures/ins_maquillaje_diplomado.png",
  ];

  return (
    <div className="flex flex-col bg-white dark:bg-[#000000] selection:bg-blue-600 selection:text-white pb-24">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-linear-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-black">
        {/* Encabezado principal */}
        <div className="max-w-4xl text-center z-10 flex flex-col items-center gap-6">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-500 uppercase">
            Marketing Digital
          </h2>
          <h1 className="text-2xl md:text-6xl lg:text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            Domina el mercado digital.
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 max-w-2xl mt-2">
            Aprende estrategias probadas para posicionar marcas, crear contenido
            que convierte y lanzar campañas publicitarias rentables.
          </p>
        </div>

        {/* Imagen Hero */}
        <div className="absolute mt-20 w-full h-full aspect-video md:aspect-21/9 overflow-hidden shadow-2xl shadow-black/10 border border-slate-100 dark:border-gray-800">
          <Image
            src="/images/pictures/lp_maquillaje_1.png" // Recuerda cambiar la imagen a una de marketing
            alt="Curso de marketing profesional"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* --- PENSUM (BENTO GRID STYLE) --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-xl font-black tracking-tight text-slate-900 dark:text-white">
              El ecosistema completo.
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Nuestro programa abarca las tres áreas fundamentales para el éxito
              de cualquier negocio en el entorno digital actual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Módulo 1 */}
            <div className="bg-white dark:bg-[#111111] p-10 rounded-4xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Branding y Estrategia
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Aprende a construir una identidad de marca sólida, definir a tu
                cliente ideal y crear una propuesta de valor que te diferencie
                de la competencia.
              </p>
            </div>

            {/* Módulo 2 */}
            <div className="bg-white dark:bg-[#111111] p-10 rounded-4xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Redes Sociales y Contenido
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Domina la gestión profesional de Instagram y TikTok. Crea
                contenido estratégico que genere comunidad, autoridad y aumente
                tu visibilidad orgánica.
              </p>
            </div>

            {/* Módulo 3 */}
            <div className="bg-white dark:bg-[#111111] p-10 rounded-4xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Publicidad y Ventas (Ads)
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Configura campañas pagadas efectivas en Facebook e Instagram
                Ads. Aprende técnicas de cierre de ventas y embudos para
                convertir seguidores en clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULARIO DE INSCRIPCIÓN --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Texto y CTA */}
          <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Inicia tu transformación <br className="hidden lg:block" /> hoy
              mismo.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
              Completa el formulario para reservar tu cupo en la próxima edición
              de nuestro diplomado en Marketing Digital. Cupos limitados para
              garantizar atención personalizada.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>{" "}
                Clases en vivo
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>{" "}
                Certificado Avalado
              </div>
            </div>
          </div>

          {/* Contenedor del Formulario */}
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-50 dark:bg-[#111111] rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-gray-800 p-2 overflow-hidden">
              <InscriptionForm availableDates={[]} className="" />
            </div>
          </div>
        </div>
      </section>

      {/* --- ACORDEÓN: LA MEJOR PROPUESTA --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-12 text-center md:text-left">
            La mejor propuesta.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Acordeón Interactivo */}
            <div className="flex flex-col gap-2">
              {/* Item 1 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(0)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 0 ? "text-blue-600 dark:text-blue-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Lorem ipsum dolor
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 0 ? "rotate-180 text-blue-600 dark:text-blue-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 0 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    aut sapiente voluptates, velit quasi necessitatibus, amet
                    aliquid praesentium soluta nam exercitationem fugit autem
                    assumenda corrupti labore excepturi a quisquam quis. Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(1)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 1 ? "text-blue-600 dark:text-blue-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Sit amet consectetur
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 1 ? "rotate-180 text-blue-600 dark:text-blue-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 1 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Corrupti vitae optio suscipit harum eligendi sapiente veniam
                    eaque iure unde tempora culpa possimus error, quisquam eos a
                    ducimus quos perspiciatis quidem. Velit quasi
                    necessitatibus, amet aliquid praesentium.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(2)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 2 ? "text-blue-600 dark:text-blue-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Adipisicing elit et aut
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 2 ? "rotate-180 text-blue-600 dark:text-blue-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 2 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    aut sapiente voluptates, velit quasi necessitatibus, amet
                    aliquid praesentium soluta nam exercitationem fugit autem
                    assumenda corrupti.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(3)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 3 ? "text-blue-600 dark:text-blue-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Sapiente voluptates velit
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 3 ? "rotate-180 text-blue-600 dark:text-blue-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 3 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Corrupti vitae optio suscipit harum eligendi sapiente veniam
                    eaque iure unde tempora culpa possimus error, quisquam eos a
                    ducimus quos perspiciatis quidem. Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen Dinámica del Acordeón */}
            <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-gray-800">
              <Image
                src={informationImages[openSection] || informationImages[0]}
                alt="Información del curso"
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
