"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { MenuItem, MenuSection } from "./interfaces";

export default function MobileMenu({ sections }: { sections: MenuSection[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="md:hidden">
      {" "}
      <button onClick={() => setIsOpen(true)} className="p-2 text-gray-700">
        <Menu size={28} color="#fff" />
      </button>
      {/* Overlay y Menú */}
      <div
        className={`fixed inset-0 z-100 bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header del Menú */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-white font-bold text-xl">Menú</span>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <X size={28} color="#fff" />
            </button>
          </div>

          {/* Opciones del Menú */}
          <nav className="flex flex-col gap-6">
            {sections.map((section: MenuSection, index: number) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex justify-between items-center w-full text-white text-lg font-semibold capitalize"
                >
                  {section.title}
                  <ChevronDown
                    className={`transition-transform ${openSection === section.title ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Sub-items dinámicos */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${openSection === section.title ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-red-800">
                    {section.items.map((item: MenuItem) => (
                      <Link
                        key={item.slug}
                        href={`${item.href}?type=${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="text-white text-md hover:text-red-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
      {/* blur de fondo */}
      {isOpen && (
        <div className="absolute top-0 right-0 bg-black opacity-50 h-svh w-svw"></div>
      )}
    </div>
  );
}
