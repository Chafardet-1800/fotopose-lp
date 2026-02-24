import Image from "next/image";
import Link from "next/link";

export default function ModelingDetail() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#000000] selection:bg-red-900 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-linear-to-b from-red-50/50 to-white dark:from-red-950/20 dark:to-black">
        {/* Encabezado principal */}
        <div className="max-w-4xl text-center z-10 flex flex-col items-center gap-6">
          <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
            Academia de Modelaje
          </h2>
          <h1 className="text-2xl md:text-6xl lg:text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            Construye tu mejor versión.
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 max-w-2xl mt-2">
            Fórmate como modelo profesional desde cero. Desarrolla tu seguridad,
            domina las pasarelas y proyecta una imagen integral impecable.
          </p>

          <div className="mt-4">
            <Link
              href="/course/registration?type=modeling"
              className="inline-block rounded-sm bg-red-900 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-red-800 hover:scale-105 shadow-lg shadow-red-900/30"
            >
              Inscribirse ahora
            </Link>
          </div>
        </div>

        {/* Imagen Hero Flotante */}
        <div className="relative mt-20 w-full max-w-5xl aspect-video md:aspect-21/9 rounded-sm overflow-hidden shadow-2xl shadow-black/10 border border-slate-100 dark:border-gray-800">
          <Image
            src="/images/pictures/mi_modelaje_2.png"
            alt="Modelo profesional FOTOPOSEV"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
      </section>

      {/* --- FEATURE DE TEXTO CENTRADO --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            No es solo belleza, <br className="hidden md:block" /> es actitud y
            disciplina.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl">
            Nuestra academia está diseñada para potenciar tus talentos
            naturales. Te brindamos las herramientas necesarias para destacar en
            la industria de la moda, publicidad y certámenes de belleza con
            profesionalismo y elegancia.
          </p>
        </div>

        {/* Imagen ancha a pantalla completa */}
        <div className="relative mt-16 w-full max-w-6xl mx-auto aspect-21/9 rounded-4xl overflow-hidden bg-slate-100 dark:bg-gray-900 border border-slate-100 dark:border-gray-800 shadow-xl">
          <Image
            src="/images/pictures/mi_modelaje_3.png"
            alt="Clases de modelaje"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* --- SECCIÓN ALTERNADA 1: CASTINGS --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
              Proyección Internacional
            </h2>
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Prepara tu camino <br /> hacia el éxito.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Aprende cómo enfrentarte a castings exigentes, armar tu compcard
              profesional y entender cómo funcionan los contratos con las
              mejores agencias de modelaje a nivel nacional e internacional.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative w-full aspect-square md:aspect-4/3 rounded-4xl overflow-hidden shadow-xl border border-slate-100 dark:border-gray-800">
            <Image
              src="/images/pictures/mi_modelaje_6.png"
              alt="Preparación para Castings"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- SLIDER PREMIUM (Técnicas Base) --- */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase mb-3">
              Áreas de Especialización
            </h2>
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Domina cada escenario.
            </h2>
          </div>
        </div>

        {/* Carrusel Horizontal (Snap) */}
        <div className="flex scroll-hidden gap-6 overflow-x-auto pb-10 px-6 max-w-7xl mx-auto snap-x snap-mandatory custom-scrollbar">
          {/* Card 1: Pasarela */}
          <div className="group relative shrink-0 w-[85vw] md:w-150 aspect-4/3 md:aspect-video rounded-4xl overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/mi_modelaje_4.png"
              alt="Clases de Pasarela"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Pasarela Profesional
              </h3>
              <p className="text-sm md:text-base text-white/80 max-w-md mb-6 line-clamp-2">
                Domina el escenario con seguridad. Aprenderás técnicas de
                caminata, postura, giros y expresión corporal para deslumbrar en
                desfiles de alta costura.
              </p>
              <Link
                href="/course/registration?type=modeling"
                className="w-fit rounded-sm bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                Inscribirme
              </Link>
            </div>
          </div>

          {/* Card 2: Expresión */}
          <div className="group relative shrink-0 w-[85vw] md:w-150 aspect-4/3 md:aspect-video rounded-4xl overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/mi_modelaje_5.png"
              alt="Expresión Corporal"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Expresión y Actuación
              </h3>
              <p className="text-sm md:text-base text-white/80 max-w-md mb-6 line-clamp-2">
                Proyecta emociones reales. Técnicas de actuación para
                comerciales, dominio escénico y desenvolvimiento frente a las
                cámaras.
              </p>
              <Link
                href="/course/registration?type=modeling"
                className="w-fit rounded-sm bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                Inscribirme
              </Link>
            </div>
          </div>

          {/* Card 3: Fotopose */}
          <div className="group relative shrink-0 w-[85vw] md:w-150 aspect-4/3 md:aspect-video rounded-4xl overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/mi_modelaje_7.png"
              alt="Técnicas de Fotopose"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Técnicas de Fotopose
              </h3>
              <p className="text-sm md:text-base text-white/80 max-w-md mb-6 line-clamp-2">
                Conoce tus mejores ángulos. Domina la interacción con los
                fotógrafos, el uso de la iluminación y la creación de un
                portafolio impactante.
              </p>
              <Link
                href="/course/registration?type=modeling"
                className="w-fit rounded-sm bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                Inscribirme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN ALTERNADA 2: ETIQUETA --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square md:aspect-4/3 rounded-4xl overflow-hidden shadow-xl border border-slate-100 dark:border-gray-800">
            <Image
              src="/images/pictures/mi_modelaje_8.png"
              alt="Etiqueta y Protocolo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
              Más que una imagen
            </h2>
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Etiqueta y Protocolo.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              La verdadera elegancia se nota en los detalles. Te enseñamos las
              normas de comportamiento en eventos sociales, cenas de gala,
              entrevistas de prensa y relacionamiento público para que destaques
              por tu educación y gracia.
            </p>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID: FORMACIÓN INTEGRAL --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Formación Integral <br /> de 360 grados.
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Ser modelo requiere habilidades que van mucho más allá de las
            pasarelas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bento 1 */}
          <div className="bg-slate-50 dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Oratoria y Dicción
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Aprende a expresarte con fluidez y seguridad frente al público y
              las cámaras. Fundamental para entrevistas, animación y certámenes.
            </p>
          </div>

          {/* Bento 2 */}
          <div className="bg-slate-50 dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Automaquillaje Básico
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Conoce tu rostro. Te enseñamos a prepararte rápidamente para
              castings y eventos cuando no dispones de un maquillador
              profesional.
            </p>
          </div>

          {/* Bento 3 */}
          <div className="bg-slate-50 dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Nutrición y Fitness
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Cuida tu herramienta de trabajo principal: tu cuerpo. Asesoría
              básica sobre hábitos saludables, cuidado de la piel y
              mantenimiento físico.
            </p>
          </div>

          {/* Bento 4 */}
          <div className="bg-slate-50 dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Marca Personal
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Aprende a gestionar tus redes sociales (Instagram, TikTok) como
              una verdadera profesional, atrayendo marcas y construyendo tu
              comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL SECTION --- */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-gray-900">
        <h2 className="text-xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
          Tu momento es ahora.
        </h2>
        <Link
          href="/course/registration?type=modeling"
          className="inline-flex items-center justify-center rounded-sm bg-red-900 dark:bg-red-800 text-white px-10 py-4 text-lg font-bold transition-transform hover:scale-105 shadow-lg shadow-red-900/20"
        >
          Únete a la academia
        </Link>
      </section>
    </div>
  );
}
