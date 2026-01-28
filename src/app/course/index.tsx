type CourseType = "marketing" | "modeling" | "aesthetics" | "photography";

// Definimos el tipo para los parámetros de búsqueda
type SearchParams = Promise<{ type: CourseType }>;

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { type } = await searchParams;

  // Si no hay tipo, podemos traer todos o mostrar un error
  // const filter = type ? { category: type } : {};

  return (
    <main className="pt-24 max-w-7xl mx-auto px-6">
      <h1 className="text-3xl font-bold capitalize mb-8">
        {type ? `Cursos de ${type.replace("-", " ")}` : "Todos nuestros cursos"}
      </h1>
    </main>
  );
}
