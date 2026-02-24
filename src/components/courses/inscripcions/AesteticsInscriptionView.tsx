"use client";
import Image from "next/image";
import { useState } from "react";
import InscriptionForm from "./InscriptionForm";
import { ChevronDown, Download, CheckCircle2 } from "lucide-react";
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

  const currentCourse = courses[currentIndex];

  return (
    <div className="flex flex-col pt-20 bg-white dark:bg-[#000000] selection:bg-red-900 selection:text-white pb-24">
      {/* --- SLIDER DE CURSOS (Selector) --- */}
      <section className="pb-12 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Programas Disponibles
          </h2>
        </div>

        {/* Carrusel Horizontal */}
        <div className="flex gap-6 overflow-x-auto py-2 px-6 max-w-7xl mx-auto snap-x snap-mandatory custom-scrollbar">
          {courses.map((course, index) => (
            <div
              key={index + course.title}
              onClick={() => setCurrentIndex(index)}
              className={`group relative shrink-0 w-[85vw] md:w-100 aspect-4/3 rounded-4xl overflow-hidden shadow-sm snap-center cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? "ring-4 ring-red-900 dark:ring-red-700 shadow-xl shadow-red-900/20 scale-[1.02]"
                  : "border border-slate-200 dark:border-gray-800 hover:shadow-lg"
              }`}
            >
              <Image
                src={`/images/pictures/ins_makeup_course_${index + 1}.png`}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {course.title}
                  </h3>
                  {/* Radio Button Customizado */}
                  <div
                    className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors ${
                      currentIndex === index
                        ? "bg-red-600 border-red-600"
                        : "border-white/70 bg-black/20 backdrop-blur-sm"
                    }`}
                  >
                    {currentIndex === index && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DETALLES DEL CURSO Y FORMULARIO --- */}
      <section className="py-16 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Columna Izquierda: Información del Curso */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Título de la sección seleccionada */}
            <div>
              <h2 className="text-3xl md:text-xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                {currentCourse.title}
              </h2>

              {/* Descripción */}
              <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {currentCourse.description
                  .split("\n")
                  .map((paragraph, index) => {
                    const isBold = paragraph.includes("<b>");
                    return (
                      <p
                        key={"paragraph" + index}
                        className={
                          isBold
                            ? "font-bold text-slate-900 dark:text-white"
                            : ""
                        }
                      >
                        {paragraph.replace("<b>", "")}
                      </p>
                    );
                  })}
              </div>
            </div>

            {/* Tarjeta de Inversión (Precio) */}
            <div className="bg-white dark:bg-[#111111] border border-slate-200 dark:border-gray-800 rounded-4xl p-8 shadow-sm">
              <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">
                Inversión del Curso
              </p>

              <div className="mb-6">
                <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                  ${currentCourse.price}
                </span>
                <span className="text-slate-500 font-medium ml-2">
                  de contado
                </span>
              </div>

              <div className="border-t border-slate-100 dark:border-gray-800 pt-6">
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                  O págalo por partes:{" "}
                  <span className="font-bold text-slate-900 dark:text-white">
                    ${currentCourse.offerPrice.total}
                  </span>
                </p>
                <ul className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-red-700 dark:text-red-500"
                    />
                    <span>
                      Inicial de <b>${currentCourse.offerPrice.init}</b>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-red-700 dark:text-red-500"
                    />
                    <span>
                      Restante de <b>${currentCourse.offerPrice.rest}</b> el
                      primer día de clases
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Condiciones */}
            <div>
              <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">
                Condiciones
              </p>
              <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                  <p>
                    Todos nuestros cursos son evaluados del 1 a 10, por lo tanto
                    para aprobar tu nota debe ser superior a 7 pts.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                  <p>
                    Los profesores responderán a sus inquietudes y asignaciones
                    en horario limitado.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                  <p>
                    Si desea adquirir algún producto o herramienta por medio de
                    nuestros proveedores de confianza{" "}
                    <a
                      href="https://www.instagram.com/lifashion.ve/?hl=es"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-red-900 dark:text-red-500 hover:underline"
                    >
                      @lifashion.ve
                    </a>
                    .
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                  <p>
                    En caso de faltar tu modelo a las prácticas o de
                    inasistencia deberás recuperar la clase. El costo de la
                    clase de recuperación es de 20$ o al cambio.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-red-800 shrink-0"></div>
                  <p>
                    Si no cuentas con modelos puedes solicitar una modelo de la
                    academia por un costo de 10$ o al cambio por clase.
                  </p>
                </li>
              </ul>
            </div>

            {/* Botón de Materiales */}
            <button
              onClick={() =>
                downloadFile(
                  `/images/pictures/ins_makeup_materials_${currentIndex + 1}.jpeg`,
                  `${currentCourse.title} - Lista de materiales.jpeg`,
                )
              }
              className="flex items-center justify-center gap-2 w-full md:w-auto bg-slate-900 dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-sm transition-transform hover:scale-105 shadow-lg"
            >
              <Download size={18} />
              Descargar lista de materiales
            </button>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-7">
            <div className="sticky top-22 bg-white dark:bg-[#111111] rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-gray-800 p-4 overflow-hidden">
              <InscriptionForm
                availableDates={currentCourse.availableDates}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ACORDEÓN: LA MEJOR PROPUESTA --- */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-12 text-center md:text-left">
            La mejor propuesta.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Acordeón Interactivo */}
            <div className="flex flex-col gap-2">
              {/* Item 1 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(0)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 0 ? "text-red-900 dark:text-red-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Lorem ipsum dolor
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 0 ? "rotate-180 text-red-900 dark:text-red-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 0 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    aut sapiente voluptates, velit quasi necessitatibus, amet
                    aliquid praesentium soluta nam exercitationem fugit autem
                    assumenda corrupti labore excepturi a quisquam quis. Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(1)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 1 ? "text-red-900 dark:text-red-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Sit amet consectetur
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 1 ? "rotate-180 text-red-900 dark:text-red-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 1 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Corrupti vitae optio suscipit harum eligendi sapiente veniam
                    eaque iure unde tempora culpa possimus error, quisquam eos a
                    ducimus quos perspiciatis quidem. Velit quasi
                    necessitatibus, amet aliquid praesentium.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(2)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 2 ? "text-red-900 dark:text-red-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Adipisicing elit et aut
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 2 ? "rotate-180 text-red-900 dark:text-red-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 2 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    aut sapiente voluptates, velit quasi necessitatibus, amet
                    aliquid praesentium soluta nam exercitationem fugit autem
                    assumenda corrupti.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="border-b border-slate-200 dark:border-gray-800">
                <button
                  onClick={() => setOpenSection(3)}
                  className="flex justify-between items-center w-full py-6 text-left"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${openSection === 3 ? "text-red-900 dark:text-red-500" : "text-slate-900 dark:text-white"}`}
                  >
                    Sapiente voluptates velit
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openSection === 3 ? "rotate-180 text-red-900 dark:text-red-500" : "text-slate-400"}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 3 ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Corrupti vitae optio suscipit harum eligendi sapiente veniam
                    eaque iure unde tempora culpa possimus error, quisquam eos a
                    ducimus quos perspiciatis quidem. Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen Dinámica del Acordeón */}
            <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-gray-800">
              <Image
                src={informationImages[openSection] || informationImages[0]}
                alt="Información del curso"
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
