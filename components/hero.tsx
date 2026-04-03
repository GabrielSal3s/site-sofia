"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <Image
            src="/logo.png"
            alt="TATO. handz logo"
            width={140}
            height={170}
            className="mx-auto drop-shadow-2xl h-44 w-auto object-contain"
            priority
          />
        </div>

        <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 animate-fade-in">
          Sofia Silva - Aprendiz de Tatuagem
        </p>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground animate-fade-in-up text-balance">
          Onde a memoria se faz pele
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
          Atendimento domiciliar em Sao Paulo - SP.
          Transformo suas memorias e ideias em arte permanente com dedicacao e carinho.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Link
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Ver Portfolio
          </Link>
          <Link
            href="#contato"
            className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300"
          >
            Agendar Sessao
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="w-6 h-6" />
      </Link>
    </section>
  )
}
