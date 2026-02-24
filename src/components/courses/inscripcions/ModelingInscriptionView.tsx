"use client";
import Image from "next/image";
import { Camera, Star, User } from "lucide-react";
import InscriptionForm from "./InscriptionForm";

export default function ModelingInscriptionView() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#000000] selection:bg-red-900 selection:text-white pb-24">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-linear-to-b from-red-50/50 to-white dark:from-red-950/20 dark:to-black">
        {/* Encabezado principal */}
        <div className="max-w-4xl text-center z-10 flex flex-col items-center gap-6">
          <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
            Inscripción Academia
          </h2>
          <h1 className="text-2xl md:text-6xl lg:text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            Un modelo completo.
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 max-w-2xl mt-2">
            Fórmate como modelo profesional desde cero. Desarrolla tu seguridad,
            domina las pasarelas y proyecta una imagen integral impecable.
          </p>
        </div>

        {/* Imagen Hero Flotante */}
        <div className="absolute mt-20 w-full h-full aspect-video md:aspect-21/9 overflow-hidden shadow-2xl shadow-black/10 border border-slate-100 dark:border-gray-800">
          <Image
            src="/images/pictures/mi_modelaje_2.png"
            alt="Modelo profesional FOTOPOSEV"
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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-xl font-black tracking-tight text-slate-900 dark:text-white">
              Plan de Estudios Integral.
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Nuestra metodología te prepara para destacar en todas las facetas
              de la industria de la moda y la publicidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Módulo 1 */}
            <div className="bg-white dark:bg-[#111111] p-10 rounded-4xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-500 rounded-sm flex items-center justify-center mb-6">
                <User size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Modelaje Comercial
              </h3>
              <div className="flex flex-col gap-3 text-start">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Conecta con la audiencia y vende con tu imagen. Aquí te
                  preparamos para el mundo de la publicidad, televisión y
                  catálogos. El enfoque es la versatilidad:
                </p>
                <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Expresión facial y manejo de emociones frente a la cámara.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Técnicas de acting para comerciales de TV.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Posado natural para catálogos y campañas de marcas
                      comerciales.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-white dark:bg-[#111111] p-10 rounded-4xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-500 rounded-sm flex items-center justify-center mb-6">
                <Camera size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Modelaje Editorial
              </h3>
              <div className="flex flex-col gap-3 text-start">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Convierte la moda en una obra de arte. Ideal para quienes
                  buscan aparecer en revistas y proyectos de vanguardia. Nos
                  enfocamos en la creatividad:
                </p>
                <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Creación de líneas corporales y poses
                      artísticas/abstractas.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Interpretación de conceptos y narrativas visuales.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Manejo de ángulos para fotografía de High Fashion.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="bg-white dark:bg-[#111111] p-10 rounded-4xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-500 rounded-sm flex items-center justify-center mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Etiqueta y Protocolo
              </h3>
              <div className="flex flex-col gap-3 text-start">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Domina el escenario con cada paso. En este módulo aprenderás
                  las técnicas fundamentales para desfilar con seguridad y
                  elegancia. Trabajamos en:
                </p>
                <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Postura corporal y alineación.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Diferentes tipos de caminata (alta costura vs.
                      pret-a-porter).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Giros, tiempos y manejo de prendas complejas en escena.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULARIO DE INSCRIPCIÓN --- */}
      <section className="pb-10 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Texto y CTA */}
          <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Da el primer paso hacia <br className="hidden lg:block" /> las
              pasarelas.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
              Completa el formulario para reservar tu cupo en nuestra próxima
              cohorte. Te guiaremos en cada paso para que construyas un
              portafolio profesional y una carrera sólida.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <div className="w-2 h-2 rounded-sm bg-red-700"></div> Clases
                presenciales
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <div className="w-2 h-2 rounded-sm bg-red-700"></div>
                Portafolio Profesional
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

      {/* --- CASOS DE ÉXITO (CARRUSEL PREMIUM) --- */}
      <section className="pb-10 bg-slate-50 dark:bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Casos de Éxito.
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
            Nuestros egresados hoy brillan en desfiles de alta costura, portadas
            de revistas y certámenes internacionales.
          </p>
        </div>

        {/* Carrusel Horizontal (Snap) */}
        <div className="flex gap-6 overflow-x-auto scroll-hidden pb-10 px-6 max-w-7xl mx-auto snap-x snap-mandatory custom-scrollbar">
          {/* Tarjeta de Éxito 1 */}
          <div className="group relative shrink-0 w-[75vw] sm:w-87.5 aspect-3/4 rounded-4xl overflow-hidden shadow-sm border border-slate-200 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/ins_modeling_ej_1.png"
              alt="Caso de éxito 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Degradado oscuro para lectura */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base text-white/90 mb-4 font-medium leading-relaxed">
                Nuestro Top Model @eduinsilva en las vallas publicitarias de
                Caracas para @estivaneli.vzla
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white font-bold">María Valentina</p>
                <p className="text-xs text-white/60">Modelo Editorial</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de Éxito 2 */}
          <div className="group relative shrink-0 w-[75vw] sm:w-87.5 aspect-3/4 rounded-4xl overflow-hidden shadow-sm border border-slate-200 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/ins_modeling_ej_2.png"
              alt="Caso de éxito 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Degradado oscuro para lectura */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base text-white/90 mb-4 font-medium leading-relaxed">
                Nuestra modelo @marianyiarocha para la marca @amaryyaaa
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white font-bold">Ana Sofía</p>
                <p className="text-xs text-white/60">Miss y Modelo Comercial</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de Éxito 3 */}
          <div className="group relative shrink-0 w-[75vw] sm:w-87.5 aspect-3/4 rounded-4xl overflow-hidden shadow-sm border border-slate-200 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/ins_modeling_ej_3.png"
              alt="Caso de éxito 3"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Degradado oscuro para lectura */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base text-white/90 mb-4 font-medium leading-relaxed">
                Nuestro modelo @anyarens_27 en #Mexico para lo nuevo de la marca
                @cuidadoconelperromx
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white font-bold">Camila Andrea</p>
                <p className="text-xs text-white/60">Modelo de Pasarela</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de Éxito 4 */}
          <div className="group relative shrink-0 w-[75vw] sm:w-87.5 aspect-3/4 rounded-4xl overflow-hidden shadow-sm border border-slate-200 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/ins_modeling_ej_4.png"
              alt="Caso de éxito 4"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Degradado oscuro para lectura */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <p className="text-sm md:text-base text-white/90 mb-4 font-medium leading-relaxed">
                Nuestro modelo @jhoivernavarro_v para lo nuevo de la marca
                @zapativoss
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white font-bold">Valeria</p>
                <p className="text-xs text-white/60">Talento FOTOPOSEV</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de cierre sutil */}
        <div className="mt-12 text-center px-6">
          <p className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-200">
            Tú puedes ser nuestra próxima gran historia.
          </p>
        </div>
      </section>
    </div>
  );
}
