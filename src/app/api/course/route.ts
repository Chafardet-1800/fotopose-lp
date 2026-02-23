// course.service.ts

import { prisma } from "@/src/lib/prisma";

type CourseInterfece = {
  title: string;
  description: string;
  price: number;
  offerPrice: number;
  imageUrl: string;
  courseType: string;
  // Para reemplazar por completo los arreglos:
  materialRequirements: string[];
  availableDates: {
    duration: string;
    month: string;
  }[];
  providerId: string;
};

// ==============================
// 1. CREATE (Crear un curso)
// ==============================
export const createCourse = async (data: CourseInterfece) => {
  try {
    const newCourse = await prisma.course.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        offerPrice: data.offerPrice, // Opcional
        imageUrl: data.imageUrl, // Opcional
        courseType: data.courseType,
        materialRequirements: data.materialRequirements || [],
        // 🔹 Tipo compuesto: Prisma lo maneja como un arreglo de objetos normales
        availableDates: data.availableDates || [],
        // 🔹 Relación: Pasamos el ID del usuario proveedor
        provider: data.providerId
          ? { connect: { id: data.providerId } }
          : undefined,
      },
      // Opcional: Que nos devuelva los datos del proveedor creado
      include: {
        provider: true,
      },
    });
    return newCourse;
  } catch (error) {
    console.error("Error creando el curso:", error);
    throw error;
  }
};

// ==============================
// 2. READ (Obtener cursos)
// ==============================

// Obtener TODOS los cursos
export const getAllCourses = async () => {
  return await prisma.course.findMany({
    // Incluimos la información del proveedor (usuario) asociado
    include: {
      provider: {
        select: { displayName: true, email: true, photoUrl: true }, // Solo traemos campos útiles
      },
    },
    orderBy: { createdAt: "desc" }, // Ordenados por más recientes
  });
};

// Obtener UN curso por su ID
export const getCourseById = async (courseId: string) => {
  return await prisma.course.findUnique({
    where: { id: courseId },
    include: { provider: true },
  });
};

// ==============================
// 3. UPDATE (Actualizar un curso)
// ==============================
export const updateCourse = async (courseId: string, data: CourseInterfece) => {
  try {
    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        offerPrice: data.offerPrice,
        imageUrl: data.imageUrl,
        courseType: data.courseType,
        // Para reemplazar por completo los arreglos:
        materialRequirements: data.materialRequirements,
        availableDates: data.availableDates,
      },
    });
    return updatedCourse;
  } catch (error) {
    console.error("Error actualizando el curso:", error);
    throw error;
  }
};

// ==============================
// 4. DELETE (Eliminar un curso)
// ==============================
export const deleteCourse = async (courseId: string) => {
  try {
    const deletedCourse = await prisma.course.delete({
      where: { id: courseId },
    });
    return deletedCourse;
  } catch (error) {
    console.error("Error eliminando el curso:", error);
    throw error;
  }
};
