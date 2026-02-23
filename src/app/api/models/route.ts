import { prisma } from "@/src/lib/prisma";

type ModelInterface = {
  id: string;
  name: string;
  bio: string;
  contactInfo: string | undefined;
  profileImage: string | undefined;
  providerId: string;
  portfolioImages: PortfolioImageInterface[];
};

type PortfolioImageInterface = {
  imageUrl: string;
  description: string | undefined;
  order: number | undefined;
  // Relación con Model
  modelId: string | undefined;
};

// ==============================
// 1. CREATE (Crear un modelo)
// ==============================
export const createModel = async (data: ModelInterface) => {
  try {
    const newModel = await prisma.model.create({
      data: {
        name: data.name,
        bio: data.bio,
        contactInfo: data.contactInfo,
        profileImage: data.profileImage,

        // 🔹 Conectar con el usuario creador (Provider)
        provider: data.providerId
          ? { connect: { id: data.providerId } }
          : undefined,

        // 🔹 ESCRITURA ANIDADA: Crear imágenes del portafolio al mismo tiempo (Opcional)
        // data.portfolioImages debe ser un array como: [{ imageUrl: "...", order: 1 }]
        portfolioImages:
          data.portfolioImages && data.portfolioImages.length > 0
            ? { create: data.portfolioImages }
            : undefined,
      },
      // Le pedimos a Prisma que nos devuelva el modelo recién creado junto con sus imágenes
      include: {
        portfolioImages: true,
      },
    });
    return newModel;
  } catch (error) {
    console.error("Error creando el modelo:", error);
    throw error;
  }
};

// ==============================
// 2. READ (Obtener modelos)
// ==============================

// Obtener TODOS los modelos
export const getAllModels = async () => {
  return await prisma.model.findMany({
    include: {
      // Traemos las imágenes ordenadas por el campo "order"
      portfolioImages: {
        orderBy: { order: "asc" },
      },
      // Traemos datos básicos del proveedor
      provider: {
        select: { displayName: true, email: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

// Obtener UN modelo por su ID
export const getModelById = async (modelId: string) => {
  return await prisma.model.findUnique({
    where: { id: modelId },
    include: {
      portfolioImages: {
        orderBy: { order: "asc" },
      },
      provider: true,
    },
  });
};

// ==============================
// 3. UPDATE (Actualizar un modelo)
// ==============================
export const updateModel = async (modelId: string, data: ModelInterface) => {
  try {
    const updatedModel = await prisma.model.update({
      where: { id: modelId },
      data: {
        name: data.name,
        bio: data.bio,
        contactInfo: data.contactInfo,
        profileImage: data.profileImage,
        // Nota: Para actualizar/agregar/eliminar imágenes del portafolio,
        // suele ser más limpio hacer un CRUD separado exclusivo para PortfolioImage.
      },
      include: {
        portfolioImages: true,
      },
    });
    return updatedModel;
  } catch (error) {
    console.error("Error actualizando el modelo:", error);
    throw error;
  }
};

// ==============================
// 4. DELETE (Eliminar un modelo)
// ==============================
export const deleteModel = async (modelId: string) => {
  try {
    // ⚠️ ATENCIÓN CON MONGODB:
    // Como tu esquema no tiene `@relation(onDelete: Cascade)`, si borras un modelo
    // que tiene imágenes, esas imágenes quedarán "huérfanas" en la base de datos.
    // La mejor práctica es eliminarlas manualmente primero:

    // 1. Borramos las imágenes asociadas al portafolio de este modelo
    await prisma.portfolioImage.deleteMany({
      where: { modelId: modelId },
    });

    // 2. Ahora sí borramos el modelo
    const deletedModel = await prisma.model.delete({
      where: { id: modelId },
    });

    return deletedModel;
  } catch (error) {
    console.error("Error eliminando el modelo:", error);
    throw error;
  }
};
