"use client";

import React from "react";
import Image from "next/image";

export const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="relative h-10 w-48">
          
          {/* Logo Negativa (Branca) - Visível apenas no topo (fundo azul) */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            scrolled ? "opacity-0 invisible" : "opacity-100 visible"
          }`}>
            <Image
              src="/Logo-negativo.webp"
              alt="Simples Solução TI - Suporte em São Paulo"
              fill
              priority
              sizes="(max-width: 768px) 150px, 200px"
              className="object-contain object-left"
            />
          </div>

          {/* Logo Normal (Colorida) - Visível apenas ao fazer scroll (fundo branco) */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            scrolled ? "opacity-100 visible" : "opacity-0 invisible"
          }`}>
            <Image
              src="/simplessolucao-logo.webp"
              alt="Simples Solução TI - Especialista em TI"
              fill
              priority
              sizes="(max-width: 768px) 150px, 200px"
              className="object-contain object-left"
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
