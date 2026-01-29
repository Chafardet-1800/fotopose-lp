import CourseView from "@/src/components/courses/information/CourseView";
import { COURSES_DATA } from "@/src/data/courses/courses_data";

type CourseType = "marketing" | "modeling" | "aesthetics" | "photography";

// Definimos el tipo para los parámetros de búsqueda
type SearchParams = Promise<{ type: CourseType }>;

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Obtenemos el parámetro de búsqueda
  const { type } = await searchParams;

  // Lógica: Buscamos el índice inicial según el parámetro "type"
  // Si no encuentra el tipo o no hay param, empieza en 0 (el primero)
  const initialIndex = COURSES_DATA.findIndex((c) => c.slug === type);
  const safeIndex = initialIndex === -1 ? 0 : initialIndex;

  return (
    <main>
      {/* Pasamos el índice inicial y los datos al cliente */}
      <CourseView initialIndex={safeIndex} courses={COURSES_DATA} />
    </main>
  );
}
