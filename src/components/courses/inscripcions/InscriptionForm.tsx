"use client";
import { useState } from "react";
import {
  User,
  CreditCard,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Calendar1,
} from "lucide-react";
import { sendRegistrationEmail } from "@/src/app/actions/sendEmail";

interface Prom {
  availableDates: { schedules: string; month: string }[];
}

export interface formDataInterface {
  fullName: string;
  idCard: string;
  age: string;
  phone1: string;
  phone2: string;
  email: string;
  course: string;
  month: string;
  schedule: string;
  location: string;
}

export default function InscriptionForm({ availableDates }: Prom) {
  // Estado general del formulario
  const [formData, setFormData] = useState<formDataInterface>({
    fullName: "",
    idCard: "",
    age: "",
    phone1: "",
    phone2: "",
    email: "",
    course: "",
    month: "",
    schedule: "",
    location: "",
  });
  // Estado para evitar doble click
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Estado para controlar el diálogo de éxito
  const [showSuccess, setShowSuccess] = useState(false);
  // Lista de meses
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Si cambian el mes, reseteamos el horario para que deban elegirlo de nuevo
    if (name === "month") {
      setFormData((prev) => ({ ...prev, schedule: "" }));
    }

    // Si se coloco una fecha, sin que ubiera horario
    if (name === "schedule" && !availableDates.length) {
      const year = new Date().getFullYear();
      const selectedDate = new Date(`${value} ${year}`);
      const monthIndex = selectedDate.getMonth() + 1;
      const monthName = months[monthIndex - 1];
      setFormData((prev) => ({ ...prev, month: monthName }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Llamamos al Server Action pasándole los datos del formulario
      const response = await sendRegistrationEmail(formData);

      if (response.success) {
        // Mostramos el modal
        setShowSuccess(true);
        // Limpiar el formulario después de enviarlo
        setFormData({
          fullName: "",
          idCard: "",
          age: "",
          phone1: "",
          phone2: "",
          email: "",
          course: "",
          month: "",
          schedule: "",
          location: "",
        });
      } else {
        alert("Ocurrió un problema enviando tus datos. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex flex-col h-full w-full relative">
      <div className="mb-3 text-center">
        <h2 className="text-lg font-black text-black dark:text-white">
          Formulario de Inscripción
        </h2>
        <p className="mt-2 text-sm text-black dark:text-white">
          Completa tus datos para registrarte en el curso.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col justify-between gap-3"
      >
        {/* --- DATOS PERSONALES --- */}
        <div className="grid grid-cols-1 gap-3">
          {/* Nombre y Apellido */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-black/50 dark:text-white">
              Nombre y Apellido
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                size={18}
              />
              <input
                type="text"
                name="fullName"
                required
                placeholder="Ej. Juan Pérez"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none dark:1 dark:focus:ring-white dark:border-white dark:bg-black dark:text-white"
              />
            </div>
          </div>

          {/* Número de Cédula y Edad (Agrupados) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-black/50 dark:text-white">
                Cédula
              </label>
              <div className="relative">
                <CreditCard
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                  size={18}
                />
                <input
                  type="text"
                  name="idCard"
                  required
                  placeholder="V-12345678"
                  value={formData.idCard}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-black/50 dark:text-white">
                Edad
              </label>
              <input
                type="number"
                name="age"
                required
                min="10"
                max="99"
                placeholder="Ej. 25"
                value={formData.age}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
              />
            </div>
          </div>

          {/* Teléfonos de Contacto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-black/50 dark:text-white">
                Teléfono Principal
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                  size={18}
                />
                <input
                  type="tel"
                  name="phone1"
                  required
                  placeholder="0414-1234567"
                  value={formData.phone1}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-black/50 dark:text-white">
                Teléfono Secundario
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                  size={18}
                />
                <input
                  type="tel"
                  name="phone2"
                  placeholder="0412-7654321"
                  value={formData.phone2}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Correo Electrónico */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-black/50 dark:text-white">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                size={18}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
              />
            </div>
          </div>

          {/* Zona de Residencia */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-black/50 dark:text-white">
              Zona de Residencia
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                size={18}
              />
              <input
                type="text"
                name="location"
                required
                placeholder="Ej. Chacao, Caracas"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* --- DATOS DEL CURSO --- */}
        {availableDates.length > 0 ? (
          <div className="flex flex-wrap">
            {/* Mes */}
            <div className="flex flex-col gap-1 w-full lg:w-2/6 lg:pe-1">
              <label className="text-sm font-bold text-black/50 dark:text-white">
                Mes
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                  size={18}
                />
                <select
                  name="month"
                  required
                  value={formData.month}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
                >
                  <option value="" disabled>
                    Selecciona el mes
                  </option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Horario (Depende del mes) */}
            <div className="flex flex-col gap-1 w-full lg:w-4/6 lg:ps-2">
              <label className="text-sm font-bold text-black/50 dark:text-white">
                Horario
              </label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                  size={18}
                />
                <select
                  name="schedule"
                  required
                  disabled={!formData.month} // Se deshabilita si no hay mes seleccionado
                  value={formData.schedule}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:border-black focus:outline-none dark:focus:border-white dark:border-white dark:bg-black dark:text-white"
                >
                  <option value="" disabled>
                    {formData.month
                      ? "Elige el bloque de horas"
                      : "Primero elige un mes"}
                  </option>
                  {availableDates.map(
                    (s, i) =>
                      s.month === formData.month && (
                        <option key={i} value={s.schedules}>
                          {s.schedules}
                        </option>
                      ),
                  )}
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-bold text-black/50 dark:text-white">
              Fecha
            </label>
            <div className="relative">
              <Calendar1
                className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400"
                size={18}
              />
              <input
                required
                type="date"
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                // Las clases mágicas están al final de este className
                className="w-full appearance-none rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm focus:border-black focus:outline-none dark:border-white dark:bg-black dark:text-white dark:focus:border-white [&::-webkit-calendar-picker-indicator]:cursor-pointer dark:[&::-webkit-calendar-picker-indicator]:invert"
              />
            </div>
          </div>
        )}

        {/* Botón de Submit */}
        <div className="py-2 text-right flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-md rounded-xl py-2 bg-red-900 text-white hover:bg-red-800 text-center font-bold"
          >
            {isSubmitting ? "Enviando datos..." : "Completar Inscripción"}
          </button>
        </div>
      </form>

      {/* --- MODAL DE ÉXITO --- */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm scale-100 transform rounded-2xl bg-white p-8 text-center shadow-2xl transition-all dark:bg-black animate-in zoom-in-95 duration-200">
            {/* Icono de Check */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            </div>

            {/* Textos */}
            <h3 className="mb-2 text-2xl font-black text-slate-800 dark:text-white">
              ¡Inscripción Exitosa!
            </h3>
            <p className="mb-8 text-sm text-gray-800 dark:text-gray-400">
              Hemos recibido tus datos correctamente. Te contactaremos muy
              pronto al correo y teléfono registrados para los siguientes pasos.
            </p>

            {/* Botón Cerrar */}
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full rounded-xl bg-slate-800 px-4 py-3 font-bold text-white transition-colors hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-600"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
