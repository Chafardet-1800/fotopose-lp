import Image from "next/image";

export default async function ForumPage() {
  // historico de publicaciones
  const post = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/images/pictures/lp_cejas_1.png",
      date: "2023-01-01",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/images/pictures/lp_cejas_1.png",
      date: "2023-01-01",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/images/pictures/lp_cejas_1.png",
      date: "2023-01-01",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/images/pictures/lp_cejas_1.png",
      date: "2023-01-01",
    },
  ];

  return (
    <main className="flex flex-col items-center gap-20 py-25 w-full">
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
          No mantenemos en movimiento
        </p>
      </div>

      {post.map((post, index) => (
        <section
          key={index}
          className={`flex justify-between gap-5 w-full min-h-[70vh] ${index % 2 === 0 ? "flex-col lg:flex-row" : "flex-col-reverse lg:flex-row-reverse"}`}
        >
          {/* Contenido */}
          <div className="w-full lg:max-w-[70%] flex flex-col justify-center px-10 gap-15">
            <h3 className="text-3xl font-bold text-black dark:text-white text-center max-w-2xl">
              {post.title}
            </h3>

            <div
              className="relative w-full h-full p-10 flex justify-center items-center
            bg-black dark:bg-white rounded-2xl shadow-2xl"
            >
              <p className="text-white dark:text-black text-lg sm:text-xl font-bold text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                consectetur, eum ex ut dignissimos magnam illo cupiditate
                aliquid repudiandae blanditiis inventore vel voluptatum soluta
                nobis harum deleniti earum odit ipsa?
              </p>

              <span className="text-white/60 dark:text-black/60 absolute bottom-5 right-10 text-sm font-bold">
                {post.date}
              </span>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative w-[80%] mx-auto aspect-square lg:w-full lg:max-w-[70%] lg:aspect-auto">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className={`absolute object-cover rounded-2xl ${index % 2 === 0 ? "lg:rounded-br-none lg:rounded-tr-none" : "lg:rounded-bl-none lg:rounded-tl-none"}`}
            />
          </div>
        </section>
      ))}
    </main>
  );
}
