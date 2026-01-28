import Link from "next/link";
import { MenuItem, MenuSection } from "./interfaces";

export default function DesktopMenu({ sections }: { sections: MenuSection[] }) {
  return (
    <nav className="hidden md:flex gap-8 h-full">
      {sections.map((section) => (
        <NavItem
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}
    </nav>
  );
}

// Componente de Navegación con menu desplegable
function NavItem({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="group flex items-center h-full">
      {/* Texto Principal */}
      <button className="text-xl font-medium text-white group-hover:text-2xl transition-colors cursor-pointer">
        {title}
      </button>

      {/* Contenedor Desplegable */}
      <div
        className="absolute top-20 left-0 bg-white border-b border-gray-200 
                      opacity-0 invisible translate-y-2.5
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                      transition-all duration-300 ease-out shadow-xl"
      >
        <div className="mx-auto px-10 py-8 grid grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${item.href}?type=${item.slug}`}
              className="p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
            >
              <span className="text-sm font-semibold text-gray-900">
                {item.label}
              </span>
              <p className="text-xs text-gray-500 mt-1">{item.descripcion}.</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
