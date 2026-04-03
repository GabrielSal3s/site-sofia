"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["Todos", "Fine Line", "Blackwork", "Minimalista"]

const projects = [
  { id: 1, title: "Rosa Delicada", category: "Fine Line", image: "/tattoo-1.jpg" },
  { id: 2, title: "Geometrico", category: "Blackwork", image: "/tattoo-2.jpg" },
  { id: 3, title: "Simbolo Lunar", category: "Minimalista", image: "/tattoo-3.jpg" },
  { id: 4, title: "Floral", category: "Fine Line", image: "/tattoo-4.jpg" },
  { id: 5, title: "Tribal Moderno", category: "Blackwork", image: "/tattoo-5.jpg" },
  { id: 6, title: "Constelacao", category: "Minimalista", image: "/tattoo-6.jpg" },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const handlePrev = () => {
    if (selectedImage === null) return
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedImage)
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    setSelectedImage(filteredProjects[prevIndex].id)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedImage)
    const nextIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(filteredProjects[nextIndex].id)
  }

  return (
    <section id="portfolio" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Trabalhos Recentes
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedImage(project.id)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-secondary cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs text-primary uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3 className="text-foreground font-medium">{project.title}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              aria-label="Proximo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div
              className="relative max-w-4xl max-h-[80vh] w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projects.find((p) => p.id === selectedImage)?.image || ""}
                alt={projects.find((p) => p.id === selectedImage)?.title || ""}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
