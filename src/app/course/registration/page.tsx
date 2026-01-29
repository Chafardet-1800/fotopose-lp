import AestheticsInscriptionView from "@/src/components/courses/inscripcions/AesteticsInscriptionView";
import MarketingInscriptionView from "@/src/components/courses/inscripcions/MarketingInscriptionView";
import ModelingInscriptionView from "@/src/components/courses/inscripcions/ModelingInscriptionView";

type CourseType = "marketing" | "modeling" | "aesthetics";

// Definimos el tipo para los parámetros de búsqueda
type SearchParams = Promise<{ type: CourseType }>;

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Obtenemos el parámetro de búsqueda
  const { type } = await searchParams;

  switch (type) {
    case "aesthetics":
      return <AestheticsInscriptionView />;
    case "marketing":
      return <MarketingInscriptionView />;
    case "modeling":
      return <ModelingInscriptionView />;
    default:
      break;
  }
}
