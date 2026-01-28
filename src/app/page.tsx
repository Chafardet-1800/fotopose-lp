import Image from "next/image";
import Link from "next/link";

// Esto evitará que alguien intente navegar a /courses?type=inventado
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-white dark:bg-black">
      <main
        className="flex min-h-screen w-full flex-col items-center justify-between
      bg-white dark:bg-black sm:items-start pt-16"
      >
        {/* Sección 1 - Maquillaje */}
        <section className="w-full h-svh flex flex-col justify-center items-center gap-10 relative">
          {/* Imagen de Fondo */}
          <Image
            src="/images/pictures/lp_maquillaje_1.png"
            alt="Cusos de maquillaje profesional"
            fill
            className="object-cover brightness-80" // Oscurecemos para que el texto resalte
          />

          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

          {/* Red social */}
          <p className="text-xl text-black/90 dark:text-white/90 z-10">
            @FOTOPOSEVMAKEUP
          </p>

          {/* Titulo de la sección */}
          <h1 className="text-3xl lg:text-5xl font-bold text-center text-black dark:text-white z-10">
            Cursos de maquillaje profesional
          </h1>

          {/* botones de enrrutado */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 z-10">
            <Link
              href="/course?type=aesthetics"
              className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center"
            >
              Inscribirse
            </Link>
            <Link
              href="/course?type=aesthetics"
              className="min-w-40 rounded-xl p-2 border border-black text-black
             dark:border-white dark:text-white hover:bg-black hover:text-white text-center"
            >
              Más información
            </Link>
          </div>
        </section>

        {/* Sección 2 - Modelaje */}
        <section className="w-full h-svh flex flex-col justify-center items-center gap-10 relative">
          {/* Imagen de Fondo */}
          <Image
            src="/images/pictures/lp_modelaje_1.png"
            alt="Cusos de modelaje profesional"
            fill
            className="object-cover brightness-80" // Oscurecemos para que el texto resalte
          />

          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

          {/* Titulo de la sección */}
          <h1 className="text-3xl lg:text-5xl font-bold text-center text-black dark:text-white z-10">
            Curso de Modelaje Profesional
          </h1>

          {/* Red social */}
          <p className="text-xl text-black/90 dark:text-white/90 z-10">
            @FOTOPOSEV
          </p>

          {/* botones de enrrutado */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 z-10">
            <Link
              href="/course?type=modeling"
              className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center"
            >
              Postularse
            </Link>
            <Link
              href="/course?type=modeling"
              className="min-w-40 rounded-xl p-2 border border-black text-black
             dark:border-white dark:text-white hover:bg-black hover:text-white text-center"
            >
              Más información
            </Link>
          </div>
        </section>

        {/* Sección 3 - Servicios */}
        <section className="w-full h-svh flex flex-col justify-center items-center gap-10 relative">
          <Image
            src="/images/pictures/lp_servicios_1.png"
            alt="Servicios de maquillaje y modelaje profesional"
            fill
            className="object-cover brightness-80" // Oscurecemos para que el texto resalte
          />

          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

          {/* Titulo de la sección */}
          <h1 className="text-3xl lg:text-5xl font-bold text-center text-black dark:text-white z-10">
            Contrata nuestros servicios
          </h1>

          {/* botones de enrrutado */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 z-10">
            <button
              className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center"
            >
              Belleza
            </button>
            <button
              className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center"
            >
              Modelos
            </button>
            <button
              className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center"
            >
              Fotografia
            </button>
          </div>
        </section>

        {/* Sección 4 - Cursos Varios */}
        <section className="flex flex-col lg:flex-row  w-full p-5 gap-5 lg:p-10 lg:gap-10">
          <div className="flex flex-col gap-5 lg:gap-10 lg:w-1/2">
            {/* Curso de Marketing */}
            <Link
              href="/course?type=marketing"
              className="relative flex flex-col gap-2 p-10 w-full aspect-square rounded-2xl shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/pictures/lp_marketing_1.png"
                alt="Cursos de marketing profesional"
                fill
                className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
              />

              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/60 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

              <p className="text-2xl lg:text-4xl font-bold z-10">
                Curso de Marketing Personalizado
              </p>

              <p className="text-xl text-black/90 dark:text-white/90 z-10">
                Aprende Justo lo que necesitas praa tus objetivos
              </p>
            </Link>

            {/* Curso de Cejas y pestañas */}
            <Link
              href="/course?type=aesthetics"
              className="relative flex flex-col gap-2 p-10 w-full aspect-square rounded-2xl shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Cursos de marketing profesional"
                fill
                className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
              />

              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/60 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

              <p className="text-2xl lg:text-4xl font-bold z-10">
                Cursos de Cejas y pestañas
              </p>

              <p className="text-xl text-black/90 dark:text-white/90 z-10">
                Call out a feature, benefit, or value that can stand on its own.
              </p>
            </Link>
          </div>

          <div className="flex flex-col gap-5 lg:gap-10 lg:w-1/2">
            {/* Curso de Modelaje personalizado */}
            <Link
              href="/course?type=modeling"
              className="relative flex flex-col gap-2 p-10 w-full lg:h-full aspect-square lg:aspect-auto rounded-2xl shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/pictures/lp_modelaje_2.png"
                alt="Cursos de modelaje personalizado"
                fill
                className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
              />

              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/60 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

              <p className="text-2xl lg:text-4xl font-bold z-10">
                CURSOS PERSONALIZADOS DE FOTO POSE
              </p>

              <p className="text-xl text-black/90 dark:text-white/90 z-10">
                HERRAMIENTAS PARA CUALQUIER PROFESION U OFICIO
              </p>
            </Link>
          </div>
        </section>

        {/* Sección 5 - Nosotros */}
        <section className="flex flex-col w-full p-5 gap-5 lg:p-10 lg:gap-10 rounded-2xl">
          <div
            className="relative flex flex-col justify-end gap-2 p-10 w-full lg:h-96 
            aspect-square lg:aspect-auto rounded-2xl shadow-2xl"
          >
            <Image
              src="/images/pictures/lp_nosotros_1.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

            <p className="text-2xl lg:text-4xl font-bold z-10">
              Curso de Marketing Personalizado
            </p>

            <p className="text-xl text-black/90 dark:text-white/90 z-10">
              Aprende Justo lo que necesitas praa tus objetivos
            </p>
          </div>

          <div
            className="relative flex flex-col justify-end gap-2 p-10 w-full 
          lg:h-96 aspect-square lg:aspect-auto rounded-2xl shadow-2xl"
          >
            <Image
              src="/images/pictures/lp_nosotros_2.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

            <p className="text-2xl lg:text-4xl font-bold z-10">
              Curso de Marketing Personalizado
            </p>

            <p className="text-xl text-black/90 dark:text-white/90 z-10">
              Aprende Justo lo que necesitas praa tus objetivos
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
