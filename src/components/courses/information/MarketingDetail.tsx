import Image from "next/image";
import Link from "next/link";

export default function MarketingDetail() {
  return (
    <div className="flex flex-col gap-15 py-25">
      {/* Segmento de pestañás */}
      <section className="flex flex-col gap-15 items-center">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
          Domina el mercado digital en Venezuela y el mundo.
        </h2>

        {/* Contenido apilado */}
        <div className="flex flex-col gap-5 w-full min-h-[70vh]">
          <p className="text-lg sm:text-xl font-bold text-center lg:w-[70%] mx-auto px-10 lg:p-0">
            No te quedes atras en la era digital. Nuestro curso te brinda las
            herramientas practicas para gestionar redes sociales, crear campañas
            de publicidad efectivas y aumentar tus ventas desde el primer día
          </p>
          <div className="relative h-[80vh] w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_marketing_2.png"
              alt="Curso de marketing FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
          <Link
            href="/course/registration?type=marketing"
            className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center max-w-70 mx-auto"
          >
            Inscribirse
          </Link>
        </div>

        {/* Contenido dividido foto a la derecha */}
        <div className="flex flex-col-reverse justify-between lg:flex-row gap-5 w-full min-h-[70vh]">
          <div className="w-full lg:max-w-[70%] flex flex-col justify-center px-10 gap-5">
            <p className="text-lg sm:text-xl font-bold text-center">
              En el mercado actual, si no te ven, no existes. Nuestro programa
              está diseñado para que dejes de adivinar qué publicar y comiences
              a ejecutar estrategias que atraigan clientes reales. Aprenderás a
              dominar las herramientas que las grandes marcas utilizan para
              escalar sus ventas y posicionarse como líderes en su sector.
            </p>
            <Link
              href="/course/registration?type=marketing"
              className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center max-w-70 mx-auto"
            >
              Inscribirse
            </Link>
          </div>

          <div className="relative w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_marketing_3.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
        </div>

        {/* Foto intermedia */}
        <div className="relative h-[80vh] w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
          <Image
            src="/images/pictures/mi_marketing_3.png"
            alt="Desfiles de moda FOTOPOSEV"
            fill
            className="absolute object-cover rounded-2xl lg:rounded-bl-none lg:rounded-tl-none"
          />
        </div>

        {/* Contenido dividido foto a la izquierda */}
        <div className="flex flex-col-reverse justify-between lg:flex-row gap-5 w-full min-h-[70vh]">
          <div className="relative w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_marketing_3.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-bl-none lg:rounded-tl-none"
            />
          </div>

          <div className="w-full lg:max-w-[70%] flex flex-col justify-center px-10 gap-5">
            <p className="text-lg sm:text-xl font-bold text-center">
              Metodología 100% Práctica: Olvídate de la teoría densa; aquí
              aplicas cada estrategia directamente a tu propio proyecto o
              negocio desde la primera clase.
            </p>
            <Link
              href="/course/registration?type=marketing"
              className="min-w-40 rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white text-center max-w-70 mx-auto"
            >
              Inscribirse
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
