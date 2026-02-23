import Image from "next/image";

export default function MakeupDetail() {
  return (
    <div className="flex-col gap-18 pb-25">
      {/* Seccion de maquillaje */}
      <section className="flex flex-1 flex-col gap-18 mt-20 items-center">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
          Domina el arte de la belleza y transforma tu pasión en una carrera
          profesional.
        </h2>

        {/* Slider lateral a la derecha */}
        <div className="w-full h-[60vh] lg:h-[73vh] flex items-center gap-5 overflow-x-scroll scroll-hidden">
          {/* Tarjeta 1 */}
          <div
            className="relative flex flex-col justify-between min-w-[70%] max-w-[70%] ms-20 p-3 sm:p-10
                aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
          >
            <Image
              src="/images/pictures/mi_makeup_2.png"
              alt="Maquilladora profesional"
              fill
              className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            {/* Degradado */}
            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/10 to-white/45 dark:from-black/80 dark:to-white/10"></div>

            {/* Contenido */}
            <div className="flex flex-col gap-2 z-10">
              <p className="text-lg sm:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                rem et suscipit voluptate voluptatum molestias
              </p>
            </div>

            {/* Botón */}
            <button
              className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
              dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
            >
              Inscribirme
            </button>
          </div>

          {/* Tarjeta 2 */}
          <div
            className="relative flex flex-col justify-between min-w-[70%] max-w-[70%] ms-5 p-3 sm:p-10
                aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
          >
            <Image
              src="/images/pictures/mi_makeup_3.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            {/* Degradado */}
            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/10 to-white/45 dark:from-black/80 dark:to-white/10"></div>

            {/* Contenido */}
            <div className="flex flex-col gap-2 z-10">
              <p className="text-lg sm:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                rem et suscipit voluptate voluptatum molestias
              </p>
            </div>

            {/* Botón */}
            <button
              className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
              dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
            >
              Inscribirme
            </button>
          </div>

          {/* Tarjeta 3 */}
          <div
            className="relative flex flex-col justify-between min-w-[70%] max-w-[70%] ms-5 p-3 sm:p-10
                aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
          >
            <Image
              src="/images/pictures/lp_cejas_1.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            {/* Degradado */}
            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/10 to-white/45 dark:from-black/80 dark:to-white/10"></div>

            {/* Contenido */}
            <div className="flex flex-col gap-2 z-10">
              <p className="text-lg sm:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                rem et suscipit voluptate voluptatum molestias
              </p>
            </div>

            {/* Botón */}
            <button
              className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
              dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
            >
              Inscribirme
            </button>
          </div>

          {/* Tarjeta 4 */}
          <div
            className="relative flex flex-col justify-between min-w-[70%] max-w-[70%] ms-5 p-3 sm:p-10
                aspect-square sm:aspect-2/1 rounded-2xl shadow-xl"
          >
            <Image
              src="/images/pictures/lp_cejas_1.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="object-cover brightness-80 rounded-2xl" // Oscurecemos para que el texto resalte
            />

            {/* Degradado */}
            <div className="rounded-2xl absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/10 to-white/45 dark:from-black/80 dark:to-white/10"></div>

            {/* Contenido */}
            <div className="flex flex-col gap-2 z-10">
              <p className="text-lg sm:text-4xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <p className="text-sm sm:text-xl text-black/90 dark:text-white/90">
                Blanditiis, vel aperiam? Quod repudiandae, accusantium facere
                rem et suscipit voluptate voluptatum molestias
              </p>
            </div>

            {/* Botón */}
            <button
              className="w-40 mx-auto lg:m-0 lg:ms-auto rounded-xl p-2 bg-black text-white text-shadow-white hover:bg-white hover:text-black
              dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white z-10"
            >
              Inscribirme
            </button>
          </div>
        </div>
      </section>

      {/* Segmento de pestañás */}
      <section className="flex flex-col gap-18 mt-20 items-center">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
          Extensiones y Lifting de Pestañas
        </h2>

        {/* Contenido dividido */}
        <div className="flex flex-col-reverse justify-between lg:flex-row gap-5 w-full min-h-[70vh]">
          <div className="w-full lg:max-w-[70%] flex flex-col justify-center px-10">
            <p className="text-lg sm:text-xl font-bold text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              consectetur, eum ex ut dignissimos magnam illo cupiditate aliquid
              repudiandae blanditiis inventore vel voluptatum soluta nobis harum
              deleniti earum odit ipsa?
            </p>
          </div>

          <div className="relative w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_makeup_4.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
        </div>

        {/* Contenido apilado */}
        <div className="flex flex-col gap-5 w-full min-h-[70vh]">
          <p className="text-lg sm:text-xl font-bold text-center lg:w-[70%] mx-auto px-10 lg:p-0">
            Especialízate en la técnica de aplicación pelo a pelo y volumen
            ruso. Aprenderás el manejo seguro de adhesivos, curvaturas y
            longitudes para crear miradas impactantes con acabados profesionales
            y duraderos.
          </p>
          <div className="relative h-[80vh] w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_makeup_5.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
        </div>
      </section>

      {/* Segmento de Cejas */}
      <section className="flex flex-col gap-18 mt-20 items-center">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
          Diseño y Perfilado de Cejas Profesional
        </h2>

        {/* Contenido dividido */}
        <div className="flex flex-col-reverse justify-between lg:flex-row gap-5 w-full min-h-[70vh]">
          <div className="relative w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_makeup_6.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-bl-none lg:rounded-tl-none"
            />
          </div>

          <div className="w-full lg:max-w-[70%] flex flex-col justify-center px-10">
            <p className="text-lg sm:text-xl font-bold text-center">
              Aprende a transformar miradas a través del diseño de cejas
              personalizado. En este curso dominarás la visagismo, depilación
              técnica y la aplicación de Henna para lograr resultados definidos
              y naturales que tus clientes amarán.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full min-h-[70vh]">
          <p className="text-lg sm:text-xl font-bold text-center lg:w-[70%] mx-auto px-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            consectetur, eum ex ut dignissimos magnam illo cupiditate aliquid
            repudiandae blanditiis inventore vel voluptatum soluta nobis harum
            deleniti earum odit ipsa?
          </p>
          <div className="relative h-[80vh] w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_makeup_7.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
        </div>
      </section>

      {/* Segmento de Depilacion */}
      <section className="flex flex-col gap-18 mt-20 items-center">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
          Informacion del curso de depilacion
        </h2>

        {/* Contenido dividido */}
        <div className="flex flex-col-reverse justify-between lg:flex-row gap-5 w-full min-h-[70vh]">
          <div className="w-full lg:max-w-[70%] flex flex-col justify-center px-10">
            <p className="text-lg sm:text-xl font-bold text-center">
              Domina las técnicas de depilación más eficaces y menos dolorosas.
              Te enseñamos el manejo de diferentes tipos de cera, cuidados de la
              piel pre y post depilación, y protocolos de higiene para ofrecer
              un servicio de alta calidad
            </p>
          </div>

          <div className="relative w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_makeup_8.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
        </div>

        {/* Contenido apilado */}
        <div className="flex flex-col gap-5 w-full min-h-[70vh]">
          <p className="text-lg sm:text-xl font-bold text-center lg:w-[70%] mx-auto px-10 lg:p-0">
            Domina las técnicas de depilación más eficaces y menos dolorosas. Te
            enseñamos el manejo de diferentes tipos de cera, cuidados de la piel
            pre y post depilación, y protocolos de higiene para ofrecer un
            servicio de alta calidad
          </p>
          <div className="relative h-[80vh] w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/mi_makeup_9.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
