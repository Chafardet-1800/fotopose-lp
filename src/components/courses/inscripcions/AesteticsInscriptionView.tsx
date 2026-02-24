"use client";
import Image from "next/image";
import { useState } from "react";
import InscriptionForm from "./InscriptionForm";
import { ChevronDown } from "lucide-react";
import { courses } from "@/src/data/courses/courses_data";

export default function AestheticsInscriptionView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openSection, setOpenSection] = useState<number>(0);

  const informationImages: string[] = [
    "/images/pictures/ins_maquillaje_automaquillaje.png",
    "/images/pictures/ins_maquillaje_avanzado.png",
    "/images/pictures/ins_maquillaje_intensivo.png",
    "/images/pictures/ins_maquillaje_diplomado.png",
  ];

  const downloadFile = (url: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  return (
    <main className="flex flex-col gap-5 py-20 px-5 lg:px-0">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold lg:px-20">
          Cursos de maquilaje profesional
        </h1>
        <h2 className="text-2xl font-bold text-black dark:text-white w-full lg:px-20">
          Cursos disponibles
        </h2>
      </div>

      {/*Slider de cursos disponibles */}
      <section className="w-full flex items-center gap-5 overflow-x-scroll scroll-hidden">
        {courses.map((course, index) => (
          <div
            key={index + course.title}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex flex-col justify-between min-w-[50%] max-w-[50%] lg:min-w-[20%] lg:max-w-[20%] aspect-square 
                rounded-2xl shadow-xl cursor-pointer ${index == 0 ? "lg:ms-20" : ""}`}
          >
            <Image
              src={`/images/pictures/ins_makeup_course_${index + 1}.png`}
              alt={course.title}
              fill
              className="object-cover brightness-90 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            {/* Degradado */}
            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-red-700/30 to-black/30"></div>

            {/* Contenido */}
            <div className="flex flex-col justify-between p-3 sm:p-4 gap-2 z-10 h-full">
              <h2 className="text-lg sm:text-2xl text-white font-bold">
                {course.title}
              </h2>

              <div className="flex justify-end">
                <button
                  className={`w-6 h-6 rounded-full border-2 border-black ${currentIndex === index ? "bg-red-900" : "bg-white"}`}
                ></button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contenido y formulario de inscripcion */}
      <section className="flex flex-col lg:flex-row gap-15 lg:px-20 h-150 justify-between">
        {/* Pensum y materiales necesarios */}
        <div className="flex flex-col justify-between w-full h-full lg:max-w-[40%]">
          <div className="flex flex-col gap-3 w-full text-[0.6rem] lg:pt-10 h-full">
            <div className="flex flex-col gap-1 w-full ">
              {courses[currentIndex].description
                .split("\n")
                .map((paragraph, index) => (
                  <p
                    key={"paragraph" + index}
                    className={`text-black dark:text-white w-full ${paragraph.includes("<b>") ? "font-bold" : ""}`}
                  >
                    {paragraph.replace("<b>", "")}
                  </p>
                ))}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[0.8rem]">
                <b>Inversión del curso:</b>
              </p>
              <p>
                <b>${courses[currentIndex].price}</b> de contado o{" "}
                <b>${courses[currentIndex].offerPrice.total}</b> si lo pagas en
                partes, {courses[currentIndex].offerPrice.init} de inicial y los
                ${courses[currentIndex].offerPrice.rest} de restantes el primer
                día de clases.
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[0.8rem]">
                <b>Condiciones:</b>
              </p>
              <p className="relative">
                <span className="absolute bg-red-800 rounded-full aspect-square w-2 top-0.5"></span>
                + Todos nuestros cursos son evaluados del 1 a 10, por lo tanto
                par aprobar tu nota debe ser superior a 7 pts.
              </p>
              <p className="relative">
                <span className="absolute bg-red-800 rounded-full aspect-square w-2 top-0.5"></span>
                + Los profesores responderán a sus inquietudes y asignaciones en
                horario limitado.
              </p>
              <p className="relative">
                <span className="absolute bg-red-800 rounded-full aspect-square w-2 top-0.5"></span>
                + Si desea adquirir algun producto o herramienta por medio de
                nuestros proveedores de confianza{" "}
                <a
                  href="https://www.instagram.com/lifashion.ve/?hl=es"
                  target="_blank"
                  className="hover:text-red-600"
                >
                  @lifashion.ve
                </a>
                .
              </p>
              <p className="relative">
                <span className="absolute bg-red-800 rounded-full aspect-square w-2 top-0.5"></span>
                + En caso de faltar tu modelo a las prácticas o de inasistencia
                deberás recuperar la clase. El costo de la clase de recuperación
                es de 20$ o al cambio.
              </p>
              <p className="relative">
                <span className="absolute bg-red-800 rounded-full aspect-square w-2 top-0.5"></span>
                + Si no cuentas con modelos puedes solicitar una modelo de la
                academia por un costo de10$ o al cambio por clase.
              </p>
            </div>
          </div>

          <button
            className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 my-2 px-4 rounded-xl"
            onClick={() =>
              downloadFile(
                `/images/pictures/ins_makeup_materials_${currentIndex + 1}.jpeg`,
                `${courses[currentIndex].title} - Lista de materiales.jpeg`,
              )
            }
          >
            Lista de materiales
          </button>
        </div>

        {/* Formulario de inscripcion */}
        <div className="flex flex-col justify-center items-center w-full lg:max-w-[60%]">
          <InscriptionForm
            availableDates={courses[currentIndex].availableDates}
          />
        </div>
      </section>

      {/* Acordion de puntos fuertes */}
      <section className="flex flex-col gap-10 lg:px-20">
        <h2 className="text-4xl font-bold lg:px-20">La mejor propuesta</h2>

        <div className="flex flex-col lg:flex-row rounded-2xl bg-black dark:bg-white shadow-2xl min-h-[75vh]">
          <div className="w-full lg:max-w-[50%]  p-5 flex flex-col gap-5">
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
                className={`overflow-hidden transition-all schedules-300 ${openSection === 0 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
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
                className={`overflow-hidden transition-all schedules-300 ${openSection === 1 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
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
                className={`overflow-hidden transition-all schedules-300 ${openSection === 2 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
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
                className={`overflow-hidden transition-all schedules-300 ${openSection === 3 ? "max-h-70 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
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
