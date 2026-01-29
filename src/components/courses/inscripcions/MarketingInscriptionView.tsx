"use client";
import Image from "next/image";
import InscriptionForm from "./InscriptionForm";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MarketingInscriptionView() {
  const [openSection, setOpenSection] = useState<number>(0);

  const informationImages: string[] = [
    "/images/pictures/ins_maquillaje_automaquillaje.png",
    "/images/pictures/ins_maquillaje_avanzado.png",
    "/images/pictures/ins_maquillaje_intensivo.png",
    "/images/pictures/ins_maquillaje_diplomado.png",
  ];

  return (
    <main className="flex flex-col items-center gap-15 py-20 px-5 lg:px-0">
      {/* Imagen de cabezera con titulo */}
      <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-10 relative">
        {/* Imagen de Fondo */}
        <Image
          src="/images/pictures/lp_maquillaje_1.png"
          alt="Cusos de maquillaje profesional"
          fill
          className="object-cover brightness-80" // Oscurecemos para que el texto resalte
        />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

        {/* Titulo de la sección */}
        <p className="text-3xl lg:text-5xl font-bold text-center text-black dark:text-white z-10">
          Un modelo completo
        </p>
      </div>

      {/* Pensum */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center lg:px-20">
        <div className="flex flex-col gap-5">
          <p className="text-2xl w-full text-center border-b border-black dark:border-white">
            Lorem ipsum
          </p>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptas unde recusandae ipsa! Dolorem, exercitationem ab sint
            doloribus labore perspiciatis consequatur? Alias ipsa minima quidem
            recusandae itaque! Libero, odit excepturi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquam incidunt cum
            voluptatibus, maxime dignissimos, voluptates odit voluptatem
            laudantium debitis hic, dolorum doloremque porro velit? Reiciendis,
            officiis deserunt? Doloremque, perferendis sapiente!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl w-full text-center border-b border-black dark:border-white">
            Lorem ipsum
          </p>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptas unde recusandae ipsa! Dolorem, exercitationem ab sint
            doloribus labore perspiciatis consequatur? Alias ipsa minima quidem
            recusandae itaque! Libero, odit excepturi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquam incidunt cum
            voluptatibus, maxime dignissimos, voluptates odit voluptatem
            laudantium debitis hic, dolorum doloremque porro velit? Reiciendis,
            officiis deserunt? Doloremque, perferendis sapiente!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl w-full text-center border-b border-black dark:border-white">
            Lorem ipsum
          </p>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptas unde recusandae ipsa! Dolorem, exercitationem ab sint
            doloribus labore perspiciatis consequatur? Alias ipsa minima quidem
            recusandae itaque! Libero, odit excepturi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquam incidunt cum
            voluptatibus, maxime dignissimos, voluptates odit voluptatem
            laudantium debitis hic, dolorum doloremque porro velit? Reiciendis,
            officiis deserunt? Doloremque, perferendis sapiente!
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="w-full h-screen flex flex-col justify-center items-center gap-10 relative">
        {/* Imagen de Fondo */}
        <Image
          src="/images/pictures/lp_maquillaje_1.png"
          alt="Cusos de maquillaje profesional"
          fill
          className="object-cover brightness-80" // Oscurecemos para que el texto resalte
        />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

        <InscriptionForm />
      </div>

      {/* Acordion de puntos fuertes */}
      <section className="flex flex-col gap-10 lg:px-20">
        <h2 className="text-4xl font-bold lg:px-20">La mejor propuesta</h2>

        <div className="flex flex-col lg:flex-row rounded-2xl bg-black dark:bg-white shadow-2xl min-h-[75vh]">
          <div className="w-full lg:max-w-[50%] p-5 flex flex-col gap-5">
            {/* Primer punto */}
            <div className="border-b border-gray-100 pb-4 ">
              <button
                onClick={() => setOpenSection(0)}
                className="flex justify-between items-center w-full text-white dark:text-black text-lg font-semibold capitalize"
              >
                Lorem ipsum dolor
                <ChevronDown
                  className={`transition-transform ${openSection === 0 ? "rotate-180" : ""}`}
                />
              </button>

              {/* Sub-items dinámicos */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openSection === 0 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-white dark:text-black mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  aut sapiente voluptates, velit quasi necessitatibus, amet
                  aliquid praesentium soluta nam exercitationem fugit autem
                  assumenda corrupti labore excepturi a quisquam quis. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
                  vitae optio suscipit harum eligendi sapiente veniam eaque iure
                  unde tempora culpa possimus error, quisquam eos a ducimus quos
                  perspiciatis quidem.
                </p>
              </div>
            </div>
            {/* Segundo punto */}
            <div className="border-b border-gray-100 pb-4 ">
              <button
                onClick={() => setOpenSection(1)}
                className="flex justify-between items-center w-full text-white dark:text-black text-lg font-semibold capitalize"
              >
                Lorem ipsum dolor
                <ChevronDown
                  className={`transition-transform ${openSection === 1 ? "rotate-180" : ""}`}
                />
              </button>

              {/* Sub-items dinámicos */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openSection === 1 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-white dark:text-black mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  aut sapiente voluptates, velit quasi necessitatibus, amet
                  aliquid praesentium soluta nam exercitationem fugit autem
                  assumenda corrupti labore excepturi a quisquam quis. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
                  vitae optio suscipit harum eligendi sapiente veniam eaque iure
                  unde tempora culpa possimus error, quisquam eos a ducimus quos
                  perspiciatis quidem.
                </p>
              </div>
            </div>
            {/* tercero punto */}
            <div className="border-b border-gray-100 pb-4 ">
              <button
                onClick={() => setOpenSection(2)}
                className="flex justify-between items-center w-full text-white dark:text-black text-lg font-semibold capitalize"
              >
                Lorem ipsum dolor
                <ChevronDown
                  className={`transition-transform ${openSection === 2 ? "rotate-180" : ""}`}
                />
              </button>

              {/* Sub-items dinámicos */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openSection === 2 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-white dark:text-black mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  aut sapiente voluptates, velit quasi necessitatibus, amet
                  aliquid praesentium soluta nam exercitationem fugit autem
                  assumenda corrupti labore excepturi a quisquam quis. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
                  vitae optio suscipit harum eligendi sapiente veniam eaque iure
                  unde tempora culpa possimus error, quisquam eos a ducimus quos
                  perspiciatis quidem.
                </p>
              </div>
            </div>
            {/* Cuarto punto */}
            <div className="border-b border-gray-100 pb-4 ">
              <button
                onClick={() => setOpenSection(3)}
                className="flex justify-between items-center w-full text-white dark:text-black text-lg font-semibold capitalize"
              >
                Lorem ipsum dolor
                <ChevronDown
                  className={`transition-transform ${openSection === 3 ? "rotate-180" : ""}`}
                />
              </button>

              {/* Sub-items dinámicos */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openSection === 3 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-white dark:text-black mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  aut sapiente voluptates, velit quasi necessitatibus, amet
                  aliquid praesentium soluta nam exercitationem fugit autem
                  assumenda corrupti labore excepturi a quisquam quis. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
                  vitae optio suscipit harum eligendi sapiente veniam eaque iure
                  unde tempora culpa possimus error, quisquam eos a ducimus quos
                  perspiciatis quidem.
                </p>
              </div>
            </div>
          </div>

          <div className="relative **:mx-auto aspect-square w-full lg:max-w-[50%] lg:aspect-auto rounded-2xl">
            <Image
              src={informationImages[openSection]}
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
