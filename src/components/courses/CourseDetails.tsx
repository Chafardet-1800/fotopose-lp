import Image from "next/image";
import { CourseType } from "../base/interfaces";

interface Props {
  type: CourseType;
}

export default function CourseDetails({ type }: Props) {
  switch (type) {
    case "aesthetics":
      return (
        <div className="flex flex-1 flex-col gap-15 py-15 items-center">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          {/* Slider lateral a la derecha */}
          <div className="w-full h-[60vh] lg:h-[70vh] flex items-center gap-5 overflow-x-scroll scroll-hidden">
            <div
              className="relative flex flex-col justify-between min-w-[80%] max-w-[80%] ms-5 p-3 sm:p-10
              aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
              />

              {/* Degradado */}
              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10"></div>

              {/* Contenido */}
              <div className="flex flex-col gap-2 z-10">
                <p className="text-lg sm:text-4xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                  Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                  rem et suscipit voluptate voluptatum molestias
                </p>
              </div>

              {/* Botón */}
              <button
                className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
              >
                Inscribirme
              </button>
            </div>
            <div
              className="relative flex flex-col justify-between min-w-[80%] max-w-[80%] ms-5 p-3 sm:p-10
              aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
              />

              {/* Degradado */}
              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10"></div>

              {/* Contenido */}
              <div className="flex flex-col gap-2 z-10">
                <p className="text-lg sm:text-4xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                  Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                  rem et suscipit voluptate voluptatum molestias
                </p>
              </div>

              {/* Botón */}
              <button
                className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
              >
                Inscribirme
              </button>
            </div>
            <div
              className="relative flex flex-col justify-between min-w-[80%] max-w-[80%] ms-5 p-3 sm:p-10
              aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
              />

              {/* Degradado */}
              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10"></div>

              {/* Contenido */}
              <div className="flex flex-col gap-2 z-10">
                <p className="text-lg sm:text-4xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                  Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                  rem et suscipit voluptate voluptatum molestias
                </p>
              </div>

              {/* Botón */}
              <button
                className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
              >
                Inscribirme
              </button>
            </div>
            <div
              className="relative flex flex-col justify-between min-w-[80%] max-w-[80%] ms-5 p-3 sm:p-10
              aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
              />

              {/* Degradado */}
              <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10"></div>

              {/* Contenido */}
              <div className="flex flex-col gap-2 z-10">
                <p className="text-lg sm:text-4xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                  Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                  rem et suscipit voluptate voluptatum molestias
                </p>
              </div>

              {/* Botón */}
              <button
                className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
             dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
              >
                Inscribirme
              </button>
            </div>
          </div>
        </div>
      );
    case "modeling":
      return (
        <div className="flex-1 flex-col g items-center">
          <h2>Modelaje</h2>
        </div>
      );
    default:
      return (
        <div className="flex-1 flex-col g items-center">
          <h2>Marketing</h2>
        </div>
      );
  }
}
