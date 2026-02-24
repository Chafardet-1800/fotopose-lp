import Image from "next/image";
import Link from "next/link";

export default function MakeupDetail() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#000000] selection:bg-red-900 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-linear-to-b from-red-50/50 to-white dark:from-red-950/20 dark:to-black">
        <div className="max-w-4xl text-center z-10 flex flex-col items-center gap-6">
          <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
            Escuela de Belleza
          </h2>
          <h1 className="text-2xl md:text-6xl lg:text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            Transforma tu pasión en una carrera profesional.
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 max-w-2xl mt-2">
            Domina el arte del maquillaje, diseño de miradas y cuidado de la
            piel con técnicas vanguardistas y metodología 100% práctica.
          </p>

          <div className="mt-4">
            <Link
              href="/course/registration?type=aesthetics"
              className="inline-block rounded-full bg-red-900 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-red-800 hover:scale-105 shadow-lg shadow-red-900/30"
            >
              Inscribirse ahora
            </Link>
          </div>
        </div>

        <div className="relative mt-20 w-full max-w-5xl aspect-video md:aspect-21/9 rounded-4xl overflow-hidden shadow-2xl shadow-black/10 border border-slate-100 dark:border-gray-800">
          <Image
            src="/images/pictures/mi_makeup_2.png"
            alt="Arte del maquillaje profesional"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
      </section>

      {/* --- FEATURE TEXTO: EL MANIFIESTO --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            El rostro es tu lienzo, <br className="hidden md:block" /> el
            conocimiento tu pincel.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl">
            Nuestra academia va más allá de enseñarte a aplicar productos. Te
            preparamos para entender la anatomía del rostro, la teoría del color
            y las tendencias globales para que te conviertas en un Beauty Artist
            de alto nivel.
          </p>
        </div>
      </section>

      {/* --- SLIDER PREMIUM (Maquillaje) --- */}
      <section className="py-24 bg-slate-50 dark:bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase mb-3">
              Ramas del Maquillaje
            </h2>
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Especialidades en Maquillaje.
            </h2>
          </div>
        </div>

        <div className="flex scroll-hidden gap-6 overflow-x-auto pb-10 px-6 max-w-7xl mx-auto snap-x snap-mandatory custom-scrollbar">
          {/* Card 1 */}
          <div className="group relative shrink-0 w-[85vw] md:w-150 aspect-4/3 md:aspect-video rounded-4xl overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/mi_makeup_2.png"
              alt="Técnicas de Maquillaje"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Maquillaje Social y Novias
              </h3>
              <p className="text-sm md:text-base text-white/80 max-w-md mb-6 line-clamp-2">
                Domina las técnicas base, colorimetría y visagismo para crear
                looks impecables de día, noche y eventos especiales.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative shrink-0 w-[85vw] md:w-150 aspect-4/3 md:aspect-video rounded-4xl overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/mi_makeup_3.png"
              alt="Maquillaje Editorial"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Editorial y Pasarela
              </h3>
              <p className="text-sm md:text-base text-white/80 max-w-md mb-6 line-clamp-2">
                Técnicas avanzadas para fotografía, desfiles y producciones
                audiovisuales de alto impacto creativo.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative shrink-0 w-[85vw] md:w-150 aspect-4/3 md:aspect-video rounded-4xl overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 snap-center cursor-pointer">
            <Image
              src="/images/pictures/lp_cejas_1.png"
              alt="Efectos Especiales"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Maquillaje FX y Artístico
              </h3>
              <p className="text-sm md:text-base text-white/80 max-w-md mb-6 line-clamp-2">
                Desarrolla tu creatividad sin límites con efectos especiales,
                caracterización y maquillaje teatral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN ALTERNADA: SKINCARE --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square md:aspect-4/3 rounded-4xl overflow-hidden shadow-xl border border-slate-100 dark:border-gray-800">
            <Image
              src="/images/pictures/mi_makeup_10.png"
              alt="Cuidado de la Piel"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
              La base de todo
            </h2>
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Preparación de la Piel <br /> (Skincare).
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Un maquillaje deslumbrante comienza con una piel sana. Aprende a
              diagnosticar tipos de piel, identificar alteraciones y aplicar
              rutinas de preparación (Skin Prep) que garanticen una mayor
              duración y un acabado {`"Glow"`} natural.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN ALTERNADA: PESTAÑAS --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
              Miradas de Impacto
            </h2>
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Extensiones y <br /> Lifting de Pestañas.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Especialízate en la técnica de aplicación pelo a pelo y volumen
              ruso. Aprenderás el manejo seguro de adhesivos, curvaturas y
              longitudes para crear miradas impactantes con acabados
              profesionales y duraderos.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative w-full aspect-square md:aspect-4/3 rounded-4xl overflow-hidden shadow-xl border border-slate-100 dark:border-gray-800">
            <Image
              src="/images/pictures/mi_makeup_5.png"
              alt="Lifting de Pestañas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- SECCIÓN ALTERNADA: CEJAS --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square md:aspect-4/3 rounded-4xl overflow-hidden shadow-xl border border-slate-100 dark:border-gray-800">
            <Image
              src="/images/pictures/mi_makeup_6.png"
              alt="Diseño de Cejas"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
              Armonía Facial
            </h2>
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Diseño y Perfilado <br /> de Cejas.
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Transforma miradas a través del diseño de cejas personalizado. En
              este curso dominarás el visagismo, la depilación con hilo/cera y
              la aplicación de Henna para lograr resultados definidos que
              enmarquen perfectamente el rostro.
            </p>
          </div>
        </div>
      </section>

      {/* --- COLLAGE / GALERÍA BACKSTAGE --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Aprende haciendo.
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              Vistazo a nuestras prácticas reales en el estudio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
            {/* Foto ancha */}
            <div className="relative col-span-2 md:col-span-2 rounded-3xl overflow-hidden">
              <Image
                src="/images/pictures/mi_makeup_11.png"
                alt="Backstage 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Foto alta */}
            <div className="relative row-span-2 rounded-3xl overflow-hidden hidden md:block">
              <Image
                src="/images/pictures/mi_makeup_12.png"
                alt="Backstage 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Foto normal */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/pictures/mi_makeup_13.png"
                alt="Backstage 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Foto normal */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/pictures/mi_makeup_14.png"
                alt="Backstage 4"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CENTRAL: DEPILACIÓN --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-sm font-bold tracking-widest text-red-800 dark:text-red-600 uppercase">
            Estética Corporal
          </h2>
          <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Técnicas avanzadas <br className="hidden md:block" /> de depilación.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl">
            Domina las técnicas más eficaces y menos dolorosas. Te enseñamos el
            manejo de diferentes tipos de cera (tibia, fría, roll-on), y
            protocolos de relajación para ofrecer un servicio estético de
            altísima calidad.
          </p>
        </div>

        <div className="relative mt-16 w-full max-w-6xl mx-auto aspect-video md:aspect-21/9 rounded-4xl overflow-hidden bg-slate-100 dark:bg-gray-900 border border-slate-100 dark:border-gray-800 shadow-xl">
          <Image
            src="/images/pictures/mi_makeup_8.png"
            alt="Técnicas de depilación"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* --- BENTO GRID: HABILIDADES COMPLEMENTARIAS --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Más que una maquilladora. <br /> Una marca.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Colorimetría
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Comprende la teoría del color para crear subtonos perfectos,
              ocultar imperfecciones (ojeras, rojeces) y resaltar el color
              natural de los ojos.
            </p>
          </div>

          <div className="bg-white dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Bioseguridad
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Protocolos estrictos de higiene. Aprende a desinfectar brochas y
              productos para evitar la contaminación cruzada y proteger a tus
              clientes.
            </p>
          </div>

          <div className="bg-white dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Fotografía Beauty
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              De nada sirve un buen maquillaje si no sabes fotografiarlo. Te
              enseñamos a usar aros de luz y ángulos para capturar tu arte para
              redes sociales.
            </p>
          </div>

          <div className="bg-white dark:bg-[#111111] rounded-[2.5rem] p-10 border border-slate-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Negocios y Branding
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Arma tus paquetes de servicio, aprende a cobrar tu trabajo, crea
              contratos para novias y construye tu identidad corporativa.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL SECTION --- */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-white dark:bg-black border-t border-slate-100 dark:border-gray-900">
        <h2 className="text-xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
          Comienza a crear belleza.
        </h2>
        <Link
          href="/course/registration?type=aesthetics"
          className="inline-flex items-center justify-center rounded-full bg-red-900 dark:bg-red-800 text-white px-10 py-4 text-lg font-bold transition-transform hover:scale-105 shadow-lg shadow-red-900/20"
        >
          Inscríbete hoy
        </Link>
      </section>
    </div>
  );
}
