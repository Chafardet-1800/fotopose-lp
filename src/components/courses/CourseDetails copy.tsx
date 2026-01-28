import { CourseData } from "@/src/data/courses/courses_data";

interface Props {
  course: CourseData;
}

export default function CourseDetails({ course }: Props) {
  return (
    // La prop 'key' fuerza a React a remontar el componente para activar la animación
    <div
      key={course.slug}
      className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Detalles del Programa: {course.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {course.details}
          </p>

          <button className="mt-8 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:opacity-80 transition">
            Inscribirme en {course.title}
          </button>
        </div>

        {/* Aquí podrías poner otra imagen, temario, precio, etc. */}
        <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-2xl">
          <h3 className="text-xl font-bold mb-4">Lo que aprenderás</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Técnica Profesional 1</li>
            <li>Certificado Internacional</li>
            <li>Prácticas en vivo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
