"use client";

import { useState } from "react";
import CourseCarousel from "./CourseCarousel";
import CourseDetails from "./CourseDetails";
import { CourseData } from "@/src/data/courses/courses_data";

interface Props {
  initialIndex: number;
  courses: CourseData[];
}

export default function CourseView({ initialIndex, courses }: Props) {
  // Este estado controla AMBOS componentes
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* 1. Carrusel: Le pasamos el indice y la función para cambiarlo */}
      <CourseCarousel
        courses={courses}
        currentIndex={currentIndex}
        onChange={setCurrentIndex}
      />

      {/* 2. Contenido Dinámico: Solo recibe los datos del curso actual */}
      <div className="flex-1 bg-white dark:bg-black">
        <CourseDetails type={courses[currentIndex].slug} />
      </div>
    </div>
  );
}
