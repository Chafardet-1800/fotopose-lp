import Image from "next/image";

export default function MarketingDetail() {
  return (
    <div className="flex flex-col gap-15 pb-25">
      {/* Segmento de pestañás */}
      <section className="flex flex-col gap-15 items-center">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>

        {/* Contenido apilado */}
        <div className="flex flex-col gap-5 w-full min-h-[70vh]">
          <p className="text-lg sm:text-xl font-bold text-center lg:w-[70%] mx-auto px-10 lg:p-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            consectetur, eum ex ut dignissimos magnam illo cupiditate aliquid
            repudiandae blanditiis inventore vel voluptatum soluta nobis harum
            deleniti earum odit ipsa?
          </p>
          <div className="relative h-[80vh] w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/lp_cejas_1.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
          <p className="text-lg sm:text-xl font-bold text-center lg:w-[70%] mx-auto px-10 lg:p-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            consectetur, eum ex ut dignissimos magnam illo cupiditate aliquid
            repudiandae blanditiis inventore vel voluptatum soluta nobis harum
            deleniti earum odit ipsa?
          </p>
        </div>

        {/* Contenido dividido foto a la derecha */}
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
              src="/images/pictures/lp_cejas_1.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-br-none lg:rounded-tr-none"
            />
          </div>
        </div>

        {/* Foto intermedia */}
        <div className="relative h-[80vh] w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
          <Image
            src="/images/pictures/lp_cejas_1.png"
            alt="Desfiles de moda FOTOPOSEV"
            fill
            className="absolute object-cover rounded-2xl lg:rounded-bl-none lg:rounded-tl-none"
          />
        </div>

        {/* Contenido dividido foto a la izquierda */}
        <div className="flex flex-col-reverse justify-between lg:flex-row gap-5 w-full min-h-[70vh]">
          <div className="relative w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src="/images/pictures/lp_cejas_1.png"
              alt="Desfiles de moda FOTOPOSEV"
              fill
              className="absolute object-cover rounded-2xl lg:rounded-bl-none lg:rounded-tl-none"
            />
          </div>

          <div className="w-full lg:max-w-[70%] flex flex-col justify-center px-10">
            <p className="text-lg sm:text-xl font-bold text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              consectetur, eum ex ut dignissimos magnam illo cupiditate aliquid
              repudiandae blanditiis inventore vel voluptatum soluta nobis harum
              deleniti earum odit ipsa?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
