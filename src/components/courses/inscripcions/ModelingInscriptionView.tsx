import Image from "next/image";
import InscriptionForm from "./InscriptionForm";

export default function ModelingInscriptionView() {
  return (
    <main className="flex flex-col items-center gap-15 py-20 px-5 lg:px-0">
      {/* Imagen de cabezera con titulo */}
      <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-10 relative">
        {/* Imagen de Fondo */}
        <Image
          src="/images/pictures/lp_maquillaje_1.png"
          alt="Cusos de maquillaje profesional"
          fill
          className="object-cover brightness-80" // Oscurecemos para que el texto resalte
        />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

        {/* Titulo de la sección */}
        <p className="text-3xl lg:text-5xl font-bold text-center text-black dark:text-white z-10">
          Un modelo completo
        </p>
      </div>

      {/* Pensum */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center lg:px-20">
        <div className="flex flex-col gap-5">
          <p className="text-2xl w-full text-center border-b border-black dark:border-white">
            Lorem ipsum
          </p>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptas unde recusandae ipsa! Dolorem, exercitationem ab sint
            doloribus labore perspiciatis consequatur? Alias ipsa minima quidem
            recusandae itaque! Libero, odit excepturi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquam incidunt cum
            voluptatibus, maxime dignissimos, voluptates odit voluptatem
            laudantium debitis hic, dolorum doloremque porro velit? Reiciendis,
            officiis deserunt? Doloremque, perferendis sapiente!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl w-full text-center border-b border-black dark:border-white">
            Lorem ipsum
          </p>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptas unde recusandae ipsa! Dolorem, exercitationem ab sint
            doloribus labore perspiciatis consequatur? Alias ipsa minima quidem
            recusandae itaque! Libero, odit excepturi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquam incidunt cum
            voluptatibus, maxime dignissimos, voluptates odit voluptatem
            laudantium debitis hic, dolorum doloremque porro velit? Reiciendis,
            officiis deserunt? Doloremque, perferendis sapiente!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl w-full text-center border-b border-black dark:border-white">
            Lorem ipsum
          </p>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptas unde recusandae ipsa! Dolorem, exercitationem ab sint
            doloribus labore perspiciatis consequatur? Alias ipsa minima quidem
            recusandae itaque! Libero, odit excepturi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquam incidunt cum
            voluptatibus, maxime dignissimos, voluptates odit voluptatem
            laudantium debitis hic, dolorum doloremque porro velit? Reiciendis,
            officiis deserunt? Doloremque, perferendis sapiente!
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="w-full h-screen flex flex-col justify-center items-center gap-10 relative">
        {/* Imagen de Fondo */}
        <Image
          src="/images/pictures/lp_maquillaje_1.png"
          alt="Cusos de maquillaje profesional"
          fill
          className="object-cover brightness-80" // Oscurecemos para que el texto resalte
        />

        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white/80 to-black/10 dark:from-black/80 dark:to-white/10 "></div>

        <InscriptionForm />
      </div>

      {/* Seccion de maquillaje */}
      <section className="w-full flex flex-col gap-15 px-5 lg:px-0">
        <h2 className="text-3xl font-bold text-black dark:text-white lg:px-20">
          Casos de exito
        </h2>

        {/* Slider lateral a la derecha */}
        <div className="w-full flex items-center gap-5 overflow-x-scroll scroll-hidden">
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full lg:ms-20">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
          {/* Contenido */}
          <div className="flex flex-col gap-2 min-w-[70%] max-w-[70%] lg:min-w-[30%] lg:max-w-[30%] h-full">
            {/* Imagen */}
            <div
              className="relative flex flex-col justify-between
              aspect-[1/1.5] rounded-2xl shadow-xl"
            >
              <Image
                src="/images/pictures/lp_cejas_1.png"
                alt="Desfiles de moda FOTOPOSEV"
                fill
                className="object-cover rounded-2xl" // Oscurecemos para que el texto resalte
              />
            </div>
            {/* Descripcion */}
            <p className="text-sm sm:text-lg text-black/90 dark:text-white/90">
              Blanditiis, vel aperiam? Quod repudiandae, accusantium facere rem
              et suscipit voluptate voluptatum molestias
            </p>
          </div>
        </div>

        <p className="w-full text-center text-4xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </section>
    </main>
  );
}
