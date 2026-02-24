"use server";
import { formDataInterface } from "@/src/components/courses/inscripcions/InscriptionForm";
import { Resend } from "resend";

// Inicializamos Resend con la clave de tu .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendRegistrationEmail(formData: formDataInterface) {
  try {
    const {
      fullName,
      idCard,
      age,
      phone1,
      phone2,
      email,
      course,
      month,
      schedule,
      location,
    } = formData;

    // 1. Diseñamos el cuerpo del correo en HTML
    const htmlContent = `
      <div style="font-family: sans-serif; color: #333;">
        <h2 style="color: #2563eb;">Nueva Inscripción: ${course}</h2>
        <p>Se ha registrado un nuevo alumno con los siguientes datos:</p>
        <ul style="line-height: 1.6;">
          <li><strong>Nombre:</strong> ${fullName}</li>
          <li><strong>Cédula:</strong> ${idCard}</li>
          <li><strong>Edad:</strong> ${age} años</li>
          <li><strong>Teléfonos:</strong> ${phone1} / ${phone2 || "N/A"}</li>
          <li><strong>Correo:</strong> ${email}</li>
          <li><strong>Zona de Residencia:</strong> ${location}</li>
          <li><strong>Mes seleccionado:</strong> ${month}</li>
          <li><strong>Horario:</strong> ${schedule}</li>
        </ul>
        <hr />
        <p style="font-size: 12px; color: #888;">Este es un mensaje automático de tu plataforma.</p>
      </div>
    `;

    // 2. Enviamos el correo
    const data = await resend.emails.send({
      from: "Inscripciones <onboarding@resend.dev>", // Correo de prueba que te da Resend
      to: ["chafargetanibal@gmail.com"], // <--- CAMBIA ESTO por tu correo real
      subject: `🚨 Nueva Inscripción: ${fullName} - ${course}`,
      html: htmlContent,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return { success: false, error: "Hubo un error al enviar el correo." };
  }
}
