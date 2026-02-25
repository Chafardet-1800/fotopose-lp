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

export const courses: Course[] = [
  {
    title: "Curso básico profesional",
    description: `
    Este es un curso de 5 clases, dónde aprenderás los fundamentos para maquillar como toda una profesional a ti y  a otras personas 
    <b>Importante: 
    - Debes llevar tus materiales personales desde la primera clase, 
    - A partir de la clase 3 vas a necesitar llevar modelos al salón para las prácticas 
    - Tendrás prácticas en el salón y asignaciones para las casa.
    `,
    price: "50",
    offerPrice: {
      total: 65,
      init: 20,
      rest: 45,
      coutas: 1,
    },
    availableDates: [
      { schedules: "Lunes 02 - Viernes 06 (7am - 12pm)", month: "Marzo" },
      { schedules: "Lunes 02 - Viernes 06 (1pm - 5pm)", month: "Marzo" },
      { schedules: "Lunes 09 - Viernes 13 (7am - 12pm)", month: "Marzo" },
      { schedules: "Lunes 09 - Viernes 13 (1pm - 5pm)", month: "Marzo" },
      { schedules: "Lunes 16 - Viernes 20 (7am - 12pm)", month: "Marzo" },
      { schedules: "Lunes 16 - Viernes 20 (1pm - 5pm)", month: "Marzo" },
      { schedules: "Lunes 23 - Viernes 27 (7am - 12pm)", month: "Marzo" },
      { schedules: "Lunes 23 - Viernes 27 (1pm - 5pm)", month: "Marzo" },
    ],
  },
  {
    title: "Curso básico profesional VIP",
    description: `
    Este es un curso de 5 clases, dónde aprenderás los fundamentos para maquillar como toda una profesional a ti y  a otras personas. Ideal para quienes buscan comodidad y atención más personalizada. 
    <b>Beneficios especiales: 
    - Eliges fechas totalmente personalizadas 
    - A partir de la clase 3 vas a necesitar llevar modelos para las prácticas 
    - Materiales incluidos para la práctica en salón. 
    <b>Importante: 
    - Tendrás prácticas en el salón y asignaciones para las casa.
    `,
    price: "50",
    offerPrice: {
      total: 65,
      init: 20,
      rest: 45,
      coutas: 1,
    },
    availableDates: [],
  },
  {
    title: "Diplomado makeup",
    description: `
    Es un curso más extenso, dónde incluimos contenido desde lo más básico hasta lo avanzado, en un periodo de 3 Meses, un total de 24 clases. 
    <b>Importante: 
    - Algunas clases serán día completo eso se específica cercana la fecha de las mismas.
    - A partir del  4to  día de clases vas a necesitar llevar modelos para las prácticas. Una vez que te inscribas se te enviará un correo donde se te específicará los días y horarios de cada una.
    `,
    price: "250",
    offerPrice: {
      total: 280,
      init: 180,
      rest: 50,
      coutas: 2,
    },
    availableDates: [
      {
        schedules: "apartir del 10, Martes y Jueves (8:30am - 12pm)",
        month: "Marzo",
      },
      {
        schedules: "apartir del 10, Martes y Jueves (1:30pm - 5pm)",
        month: "Marzo",
      },
    ],
  },
];

export type Course = {
  title: string;
  description: string;
  price: string;
  offerPrice: {
    total: number;
    init: number;
    rest: number;
    coutas: number;
  };
  availableDates: {
    schedules: string;
    month: string;
  }[];
};

export type CourseData = {
  slug: CourseType;
  title: string;
  image: string;
  description: string;
  details: string;
};
