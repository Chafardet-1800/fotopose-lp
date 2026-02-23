import { CourseType } from "@/src/components/base/interfaces";

export const COURSES_DATA: CourseData[] = [
  {
    slug: "aesthetics",
    title: "Cursos de Belleza",
    image: "/images/pictures/mi_makeup_1.png", // Asegúrate de tener estas imágenes
    description: "Conviértete en profesional del  MAQUILLAJE",
    details: "Aquí va el temario completo de belleza: Piel, Ojos, Labios...",
  },
  {
    slug: "modeling",
    title: "Descubre el mundo del modelaje",
    image: "/images/pictures/mi_modelaje_1.png",
    description: "Domina la pasarela y la fotografía con nuestros expertos.",
    details: "Aquí va el temario de modelaje: Pasarela, Posing, Etiqueta...",
  },
  {
    slug: "marketing",
    title: "Marketing Digital",
    image: "/images/pictures/mi_marketing_1.png",
    description: "Tranforma tu marca con Marketing Estrategico.",
    details:
      "Aquí va el temario de marketing: Instagram, TikTok, Estrategia...",
  },
];

export type CourseData = {
  slug: CourseType;
  title: string;
  image: string;
  description: string;
  details: string;
};
