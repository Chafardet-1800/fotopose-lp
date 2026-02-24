import Image from "next/image";
import Link from "next/link";

export default function MarketingDetail() {
  return (
    <div className="flex flex-col bg-white dark:bg-[#000000] selection:bg-red-500 selection:text-white">
      {/* --- HERO SECTION --- */}
      {/* Fondo con un gradiente sutil al estilo Apple */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-linear-to-b from-red-50/50 to-white dark:from-gray-900/20 dark:to-black">
        {/* Encabezado principal */}
        <div className="max-w-4xl text-center z-10 flex flex-col items-center gap-6">
          <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase">
            Marketing Digital
          </h2>
          <h1 className="text-2xl md:text-6xl lg:text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            Domina el mercado digital en Venezuela y el mundo.
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 max-w-2xl mt-2">
            No te quedes atrás en la era digital. Nuestro curso te brinda las
            herramientas prácticas para gestionar redes sociales, crear campañas
            de publicidad efectivas y aumentar tus ventas desde el primer día.
          </p>

          <div className="mt-4">
            <Link
              href="/course/registration?type=marketing"
              className="inline-block rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-red-700 hover:scale-105 shadow-lg shadow-red-500/30"
            >
              Inscribirse ahora
            </Link>
          </div>
        </div>

        {/* Imagen Hero (Flotante) */}
        <div className="relative mt-20 w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-slate-100 dark:border-gray-800">
          <Image
            src="/images/pictures/mi_marketing_2.png"
            alt="Curso de marketing FOTOPOSEV"
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
            En el mercado actual, <br className="hidden md:block" /> si no te
            ven, no existes.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl">
            Nuestro programa está diseñado para que dejes de adivinar qué
            publicar y comiences a ejecutar estrategias que atraigan clientes
            reales. Aprenderás a dominar las herramientas que las grandes marcas
            utilizan para escalar sus ventas y posicionarse como líderes en su
            sector.
          </p>
        </div>

        {/* Imagen ancha a pantalla completa estilo banner */}
        <div className="relative mt-16 w-full max-w-6xl mx-auto aspect-21/9 rounded-4xl overflow-hidden bg-slate-100 dark:bg-gray-900 border border-slate-100 dark:border-gray-800">
          <Image
            src="/images/pictures/mi_marketing_3.png"
            alt="Estrategias de marketing"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* --- BENTO GRID (Estilo Apple Cards) --- */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Metodología */}
          <div className="group relative flex flex-col justify-between bg-white dark:bg-[#111111] rounded-[2.5rem] p-10 overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
            <div className="z-10 relative">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Metodología <br /> 100% Práctica.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Olvídate de la teoría densa; aquí aplicas cada estrategia
                directamente a tu propio proyecto o negocio desde la primera
                clase.
              </p>
            </div>
            {/* Imagen de la Card 1 */}
            <div className="relative w-full aspect-square md:aspect-video mt-10 rounded-2xl overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Image
                src="/images/pictures/mi_marketing_3.png"
                alt="Clases prácticas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2: Actualización */}
          <div className="group relative flex flex-col justify-between bg-white dark:bg-[#111111] rounded-[2.5rem] p-10 overflow-hidden shadow-sm border border-slate-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
            <div className="z-10 relative">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Actualización <br /> de Por Vida.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                El marketing digital cambia cada semana. Te enseñamos a entender
                los algoritmos para que tu estrategia nunca quede obsoleta.
              </p>
            </div>
            {/* Imagen de la Card 2 */}
            <div className="relative w-full aspect-square md:aspect-video mt-10 rounded-2xl overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Image
                src="/images/pictures/mi_marketing_3.png"
                alt="Actualización constante"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL SECTION --- */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-white dark:bg-black">
        <h2 className="text-xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
          Domina el mercado.
        </h2>
        <Link
          href="/course/registration?type=marketing"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-4 text-lg font-bold transition-transform hover:scale-105"
        >
          Inscríbete hoy
        </Link>
      </section>
    </div>
  );
}
