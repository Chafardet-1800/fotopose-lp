import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-[#000000] selection:bg-red-900 selection:text-white pb-15">
      {/* --- SECCIÓN 1: MAQUILLAJE (HERO PRINCIPAL) --- */}
      <section className="relative pt-20 w-full h-screen max-w-350 mx-auto group">
        <div className="relative w-full h-full overflow-hidden shadow-2xl border border-slate-200/50 dark:border-gray-800">
          <Image
            src="/images/pictures/lp_maquillaje_1.png"
            alt="Cursos de maquillaje profesional"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          {/* Degradado para legibilidad */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

          <div className="relative h-full inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
            <p className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm drop-shadow-md">
              @FOTOPOSEVMAKEUP
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Maquillaje <br className="hidden md:block" /> Profesional.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/course/registration?type=aesthetics"
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-xl"
              >
                Inscribirse
              </Link>
              <Link
                href="/course?type=aesthetics"
                className="flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: MODELAJE --- */}
      <section className="relative h-screen w-full max-w-350 mx-auto">
        <div className="relative w-full h-full overflow-hidden shadow-2xl border border-slate-200/50 dark:border-gray-800 group">
          <Image
            src="/images/pictures/lp_modelaje_1.png"
            alt="Cursos de modelaje profesional"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

          <div className="relative h-full inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
            <p className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm drop-shadow-md">
              @FOTOPOSEV
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Academia de <br className="hidden md:block" /> Modelaje.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/course/registration?type=modeling"
                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-xl"
              >
                Postularse
              </Link>
              <Link
                href="/course?type=modeling"
                className="flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: SERVICIOS --- */}
      <section className="relative h-screen w-full mx-auto">
        <div className="relative w-full h-full overflow-hidden shadow-2xl border border-slate-200/50 dark:border-gray-800 group">
          <Image
            src="/images/pictures/lp_servicios_1.png"
            alt="Servicios de maquillaje y modelaje profesional"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

          <div className="relative h-full inset-0 flex flex-col items-center justify-center px-6 text-center z-10">
            <h2 className="text-xl md:text-6xl lg:text-4xl font-black text-white tracking-tight mb-12">
              Contrata nuestros <br /> servicios.
            </h2>

            {/* Botones estilo Glassmorphism */}
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto max-w-3xl">
              <button className="flex-1 px-8 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black transition-all shadow-lg hover:-translate-y-1">
                Salón de Belleza
              </button>
              <button className="flex-1 px-8 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black transition-all shadow-lg hover:-translate-y-1">
                Agencia Modelos
              </button>
              <button className="flex-1 px-8 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black transition-all shadow-lg hover:-translate-y-1">
                Estudio Fotografía
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: CURSOS VARIOS (BENTO GRID) --- */}
      <section className="w-full max-w-350 my-15 mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Columna Izquierda (2 Cuadrados) */}
          <div className="flex flex-col gap-6">
            {/* Curso de Marketing */}
            <Link
              href="/course?type=marketing"
              className="group relative flex flex-col justify-end p-8 md:p-12 w-full aspect-square md:aspect-2/1 lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200/50 dark:border-gray-800"
            >
              <Image
                src="/images/pictures/lp_marketing_1.png"
                alt="Curso de marketing profesional"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-xl font-black text-white leading-tight mb-2">
                  Marketing <br /> Digital.
                </h3>
                <p className="text-white/80 font-medium text-lg flex items-center gap-2">
                  Ver plan de estudio{" "}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </p>
              </div>
            </Link>

            {/* Curso de Cejas y Pestañas */}
            <Link
              href="/course?type=aesthetics"
              className="group relative flex flex-col justify-end p-8 md:p-12 w-full aspect-square md:aspect-2/1 lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200/50 dark:border-gray-800"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Cursos de Cejas y Pestañas"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-xl font-black text-white leading-tight mb-2">
                  Cejas y <br /> Pestañas.
                </h3>
                <p className="text-white/80 font-medium text-lg flex items-center gap-2">
                  Ver especialidades{" "}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </p>
              </div>
            </Link>
          </div>

          {/* Columna Derecha (1 Rectángulo Alto) */}
          <div className="h-full">
            <Link
              href="/course?type=modeling"
              className="group relative flex flex-col justify-end p-8 md:p-12 w-full h-full min-h-125 lg:min-h-full rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200/50 dark:border-gray-800"
            >
              <Image
                src="/images/pictures/lp_modelaje_2.png"
                alt="Cursos de modelaje personalizado"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <p className="text-red-500 font-bold tracking-widest uppercase mb-2 text-sm">
                  Formación Exclusiva
                </p>
                <h3 className="text-xl md:text-2xl lg:text-6xl font-black text-white leading-tight mb-4">
                  Cursos <br /> Personalizados <br /> de Fotopose.
                </h3>
                <p className="text-white/80 font-medium text-lg md:text-xl flex items-center gap-2 max-w-sm">
                  Herramientas clave para destacar en cualquier profesión u
                  oficio.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 5: NOSOTROS E HISTORIA --- */}
      <section className=" w-full max-w-350 mx-auto px-10 flex flex-col gap-6">
        {/* Banner 1: Nosotros */}
        <Link
          href="/blurb/about_us"
          className="group relative flex flex-col justify-end p-8 md:p-12 w-full aspect-4/3 md:aspect-21/9 lg:aspect-21/7 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200/50 dark:border-gray-800"
        >
          <Image
            src="/images/pictures/lp_nosotros_1.png"
            alt="Nuestros valores"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-2xl font-black text-white mb-4">
              Nuestros valores y objetivos.
            </h3>
            <p className="text-white/80 font-medium text-base md:text-lg line-clamp-2 md:line-clamp-none">
              Conoce la historia detrás de Fotopose Venezuela, nuestra misión de
              formar talentos integrales y cómo hemos revolucionado la industria
              en el país.
            </p>
          </div>
        </Link>

        {/* Banner 2: Actividades */}
        <Link
          href="/blurb/forum"
          className="group relative flex flex-col justify-end p-8 md:p-12 w-full aspect-4/3 md:aspect-21/9 lg:aspect-21/7 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-200/50 dark:border-gray-800"
        >
          <Image
            src="/images/pictures/lp_nosotros_2.png"
            alt="Últimas actividades"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-2xl font-black text-white mb-4">
              Últimas actividades.
            </h3>
            <p className="text-white/80 font-medium text-base md:text-lg line-clamp-2 md:line-clamp-none">
              Descubre los eventos, desfiles, masterclasses y certificaciones
              más recientes de nuestra academia y únete a nuestra comunidad.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
