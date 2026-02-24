import { NextResponse } from "next/server";
import { createCourse, getAllCourses } from "../../services/course.service";

// Manejar petición GET (Obtener cursos)
export async function GET() {
  try {
    const courses = await getAllCourses();
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    return NextResponse.json(
      { error: "Error al obtener cursos" },
      { status: 500 },
    );
  }
}

// Manejar petición POST (Crear curso)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newCourse = await createCourse(body);
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error("Error al crear curso:", error);
    return NextResponse.json(
      { error: "Error al crear curso" },
      { status: 500 },
    );
  }
}
