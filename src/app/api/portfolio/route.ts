import { prisma } from "@/src/lib/prisma";

// ==============================
// 1. CREATE (Agregar una imagen a un modelo existente)
// ==============================
export const addPortfolioImage = async (
  modelId: string,
  data: { imageUrl: string; description?: string; order?: number },
) => {
  try {
    const newImage = await prisma.portfolioImage.create({
      data: {
        imageUrl: data.imageUrl,
        description: data.description,
        order: data.order,
        // Conectamos esta imagen con el Modelo usando su ID
        model: { connect: { id: modelId } },
      },
    });
    return newImage;
  } catch (error) {
    console.error("Error agregando la imagen al portafolio:", error);
    throw error;
  }
};

// ==============================
// 1.1 BULK CREATE (Agregar VARIAS imágenes al mismo tiempo)
// ==============================
// Esto es súper útil si en tu frontend permites seleccionar múltiples fotos a la vez
export const addMultiplePortfolioImages = async (
  modelId: string,
  images: { imageUrl: string; description?: string; order?: number }[],
) => {
  try {
    // Prisma no permite "connect" dentro de createMany,
    // así que inyectamos el modelId directamente en cada objeto del array
    const imagesWithModelId = images.map((img) => ({
      ...img,
      modelId: modelId,
    }));

    const result = await prisma.portfolioImage.createMany({
      data: imagesWithModelId,
    });

    return result; // Devuelve algo como { count: 4 } (número de imágenes insertadas)
  } catch (error) {
    console.error("Error agregando múltiples imágenes:", error);
    throw error;
  }
};

// ==============================
// 2. READ (Obtener imágenes)
// ==============================

// Obtener todas las imágenes de UN Modelo en específico (ordenadas)
export const getImagesByModelId = async (modelId: string) => {
  return await prisma.portfolioImage.findMany({
    where: { modelId: modelId },
    orderBy: { order: "asc" }, // Importante: respeta el orden asignado por el usuario
  });
};

// ==============================
// 3. UPDATE (Actualizar una imagen)
// ==============================
// Muy útil para cambiar el campo "order" (reorganizar la galería) o cambiar la descripción
export const updatePortfolioImage = async (
  imageId: string,
  data: { description?: string; order?: number },
) => {
  try {
    const updatedImage = await prisma.portfolioImage.update({
      where: { id: imageId },
      data: {
        description: data.description,
        order: data.order,
      },
    });
    return updatedImage;
  } catch (error) {
    console.error("Error actualizando la imagen:", error);
    throw error;
  }
};

// ==============================
// 4. DELETE (Eliminar una imagen específica)
// ==============================
export const deletePortfolioImage = async (imageId: string) => {
  try {
    const deletedImage = await prisma.portfolioImage.delete({
      where: { id: imageId },
    });
    return deletedImage;
  } catch (error) {
    console.error("Error eliminando la imagen:", error);
    throw error;
  }
};
