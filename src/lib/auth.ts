import bcrypt from "bcrypt";
import { prisma } from "./prisma";

/**
 * Recibe username y contraseña plana.
 * Devuelve true si son correctos, false si no.
 */
export async function validateCredentials(
  username: string,
  pass: string,
): Promise<boolean> {
  try {
    // 1. Buscar usuario en Prisma
    const user = await prisma.user.findFirst({
      where: { username },
    });

    // 2. Si no existe, fallar
    if (!user) return false;

    // 3. Comparar la contraseña enviada con el hash en la BD
    const isValid = await bcrypt.compare(pass, user.password);

    return isValid;
  } catch (error) {
    console.error("Error validando usuario:", error);
    return false;
  }
}
