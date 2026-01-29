"use client";
import Image from "next/image";
import { useState } from "react";
import InscriptionForm from "./InscriptionForm";
import { ChevronDown } from "lucide-react";

type Course = {
  title: string;
  description: string;
  price: string;
  offerPrice: string;
  imageUrl: string;
  materialRequirements: string[];
  availableDates: {
    duration: string;
    month: string;
  }[];
};

export default function AestheticsInscriptionView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openSection, setOpenSection] = useState<number>(0);

  const informationImages: string[] = [
    "/images/pictures/ins_maquillaje_automaquillaje.png",
    "/images/pictures/ins_maquillaje_avanzado.png",
    "/images/pictures/ins_maquillaje_intensivo.png",
    "/images/pictures/ins_maquillaje_diplomado.png",
  ];

  const courses: Course[] = [
    {
      title: "Cursos de Belleza",
      imageUrl: "/images/pictures/ins_maquillaje_automaquillaje.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.",
      price: "150",
      offerPrice: "200",
      materialRequirements: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
        "Material 7",
        "Material 8",
        "Material 9",
        "Material 10",
        "Material 11",
        "Material 12",
      ],
      availableDates: [
        { duration: "Lunes 02 - Viernes 06", month: "Febrero" },
        { duration: "Lunes 09 - Viernes 13", month: "Febrero" },
        { duration: "Lunes 16 - Viernes 20", month: "Febrero" },
        { duration: "Lunes 23 - Viernes 27", month: "Febrero" },
        { duration: "Lunes 02 - Viernes 07", month: "Marzo" },
        { duration: "Lunes 09 - Viernes 14", month: "Marzo" },
        { duration: "Lunes 16 - Viernes 20", month: "Marzo" },
      ],
    },
    {
      title: "Cursos de Belleza",
      imageUrl: "/images/pictures/ins_maquillaje_automaquillaje.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.",
      price: "150",
      offerPrice: "200",
      materialRequirements: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
        "Material 7",
        "Material 8",
        "Material 9",
        "Material 10",
        "Material 11",
        "Material 12",
      ],
      availableDates: [
        { duration: "Lunes 02 - Viernes 06", month: "Febrero" },
        { duration: "Lunes 09 - Viernes 13", month: "Febrero" },
        { duration: "Lunes 16 - Viernes 20", month: "Febrero" },
        { duration: "Lunes 23 - Viernes 27", month: "Febrero" },
        { duration: "Lunes 02 - Viernes 07", month: "Marzo" },
        { duration: "Lunes 09 - Viernes 14", month: "Marzo" },
        { duration: "Lunes 16 - Viernes 20", month: "Marzo" },
      ],
    },
    {
      title: "Cursos de Belleza",
      imageUrl: "/images/pictures/ins_maquillaje_automaquillaje.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.",
      price: "150",
      offerPrice: "200",
      materialRequirements: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
        "Material 7",
        "Material 8",
        "Material 9",
        "Material 10",
        "Material 11",
        "Material 12",
      ],
      availableDates: [
        { duration: "Lunes 02 - Viernes 06", month: "Febrero" },
        { duration: "Lunes 09 - Viernes 13", month: "Febrero" },
        { duration: "Lunes 16 - Viernes 20", month: "Febrero" },
        { duration: "Lunes 23 - Viernes 27", month: "Febrero" },
        { duration: "Lunes 02 - Viernes 07", month: "Marzo" },
        { duration: "Lunes 09 - Viernes 14", month: "Marzo" },
        { duration: "Lunes 16 - Viernes 20", month: "Marzo" },
      ],
    },
    {
      title: "Cursos de Belleza",
      imageUrl: "/images/pictures/ins_maquillaje_automaquillaje.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.",
      price: "150",
      offerPrice: "200",
      materialRequirements: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
        "Material 7",
        "Material 8",
        "Material 9",
        "Material 10",
        "Material 11",
        "Material 12",
      ],
      availableDates: [
        { duration: "Lunes 02 - Viernes 06", month: "Febrero" },
        { duration: "Lunes 09 - Viernes 13", month: "Febrero" },
        { duration: "Lunes 16 - Viernes 20", month: "Febrero" },
        { duration: "Lunes 23 - Viernes 27", month: "Febrero" },
        { duration: "Lunes 02 - Viernes 07", month: "Marzo" },
        { duration: "Lunes 09 - Viernes 14", month: "Marzo" },
        { duration: "Lunes 16 - Viernes 20", month: "Marzo" },
      ],
    },
    {
      title: "Cursos de Belleza",
      imageUrl: "/images/pictures/ins_maquillaje_automaquillaje.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.",
      price: "150",
      offerPrice: "200",
      materialRequirements: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
        "Material 7",
        "Material 8",
        "Material 9",
        "Material 10",
        "Material 11",
        "Material 12",
      ],
      availableDates: [
        { duration: "Lunes 02 - Viernes 06", month: "Febrero" },
        { duration: "Lunes 09 - Viernes 13", month: "Febrero" },
        { duration: "Lunes 16 - Viernes 20", month: "Febrero" },
        { duration: "Lunes 23 - Viernes 27", month: "Febrero" },
        { duration: "Lunes 02 - Viernes 07", month: "Marzo" },
        { duration: "Lunes 09 - Viernes 14", month: "Marzo" },
        { duration: "Lunes 16 - Viernes 20", month: "Marzo" },
      ],
    },
    {
      title: "Cursos de Belleza",
      imageUrl: "/images/pictures/ins_maquillaje_automaquillaje.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.",
      price: "150",
      offerPrice: "200",
      materialRequirements: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
        "Material 7",
        "Material 8",
        "Material 9",
        "Material 10",
        "Material 11",
        "Material 12",
      ],
      availableDates: [
        { duration: "Lunes 02 - Viernes 06", month: "Febrero" },
        { duration: "Lunes 09 - Viernes 13", month: "Febrero" },
        { duration: "Lunes 16 - Viernes 20", month: "Febrero" },
        { duration: "Lunes 23 - Viernes 27", month: "Febrero" },
        { duration: "Lunes 02 - Viernes 07", month: "Marzo" },
        { duration: "Lunes 09 - Viernes 14", month: "Marzo" },
        { duration: "Lunes 16 - Viernes 20", month: "Marzo" },
      ],
    },
    {
      title: "Cursos de Belleza",
      imageUrl: "/images/pictures/ins_maquillaje_automaquillaje.png",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora. \n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et iure est, rerum vitae eligendi facilis dolor quaerat tempora ut, accusantium deserunt doloremque? Nobis iste cupiditate quod fugiat quo illum tempora.",
      price: "150",
      offerPrice: "200",
      materialRequirements: [
        "Material 1",
        "Material 2",
        "Material 3",
        "Material 4",
        "Material 5",
        "Material 6",
        "Material 7",
        "Material 8",
        "Material 9",
        "Material 10",
        "Material 11",
        "Material 12",
      ],
      availableDates: [
        { duration: "Lunes 02 - Viernes 06", month: "Febrero" },
        { duration: "Lunes 09 - Viernes 13", month: "Febrero" },
        { duration: "Lunes 16 - Viernes 20", month: "Febrero" },
        { duration: "Lunes 23 - Viernes 27", month: "Febrero" },
        { duration: "Lunes 02 - Viernes 07", month: "Marzo" },
        { duration: "Lunes 09 - Viernes 14", month: "Marzo" },
        { duration: "Lunes 16 - Viernes 20", month: "Marzo" },
      ],
    },
  ];

  return (
    <main className="flex flex-col gap-15 py-20 px-5 lg:px-0">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold lg:px-20">
          Cursos de maquilaje profesional
        </h1>
        <h2 className="text-2xl font-bold text-black dark:text-white w-full lg:px-20">
          Cursos disponibles
        </h2>
      </div>

      {/* Slider de cursos disponibles */}
      <section className="w-full flex items-center gap-5 overflow-x-scroll scroll-hidden">
        {courses.map((course, index) => (
          <div
            key={index + course.title}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex flex-col justify-between min-w-[50%] max-w-[50%] lg:min-w-[20%] lg:max-w-[20%] aspect-square 
              rounded-2xl shadow-xl cursor-pointer ${index == 0 ? "lg:ms-20" : ""}`}
          >
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill
              className="object-cover brightness-90 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            {/* Degradado */}
            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-red-900/60 to-black/20"></div>

            {/* Contenido */}
            <div className="flex flex-col justify-between p-3 sm:p-10 gap-2 z-10 h-full">
              <h2 className="text-lg sm:text-2xl font-bold">{course.title}</h2>

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
      <section className="flex flex-col lg:flex-row gap-15 lg:px-10 justify-between">
        {/* Pensum y materiales necesarios */}
        <div className="flex flex-col gap-5 w-full lg:max-w-[50%] lg:p-10 text-sm">
          {courses[currentIndex].description
            .split("\n")
            .map((paragraph, index) => (
              <p
                key={"paragraph" + index}
                className="text-black dark:text-white w-full"
              >
                {paragraph}
              </p>
            ))}
          <p>
            El curso tiene un costo de: #{courses[currentIndex].price} de
            contado o #{courses[currentIndex].offerPrice} si lo pagas en partes
          </p>
          <p>Los materiales necesarios son:</p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {courses[currentIndex].materialRequirements.map(
              (material, index) => (
                <p key={index}>• {material}</p>
              ),
            )}
          </div>
        </div>

        {/* Formulario de inscripcion */}
        <div className="flex justify-center items-center w-full lg:max-w-[50%] p-10">
          <InscriptionForm />
        </div>
      </section>

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
