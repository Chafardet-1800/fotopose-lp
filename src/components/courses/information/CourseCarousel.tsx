"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Instala lucide-react si no la tienes
import { CourseData } from "@/src/data/courses/courses_data";

interface Props {
  courses: CourseData[];
  currentIndex: number;
  onChange: (index: number) => void;
}

export default function CourseCarousel({
  courses,
  currentIndex,
  onChange,
}: Props) {
  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    onChange(isFirst ? courses.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLast = currentIndex === courses.length - 1;
    onChange(isLast ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Contenedor de Slides con Transición */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {courses.map((course, index) => (
          <div key={course.slug} className="min-w-full h-full relative">
            {/* Imagen de Fondo */}
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover brightness-50" // Oscurecemos para que el texto resalte
              priority={index === currentIndex} // Solo carga prioridad al actual
            />

            {/* Texto sobre la imagen (Título Principal) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
                {course.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de Navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-black/40  hover:text-black dark:text-white/40  dark:hover:text-white transition"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-black/40  hover:text-black dark:text-white/40  dark:hover:text-white transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicadores (Puntitos) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {courses.map((_, idx) => (
          <button
            key={idx}
            onClick={() => onChange(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
