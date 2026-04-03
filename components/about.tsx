"use client"

import { Sparkles, Heart, MapPin } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Fine Line",
    description: "Tracos finos e delicados que criam desenhos elegantes e significativos.",
  },
  {
    icon: Heart,
    title: "Tatuagens com Sentido",
    description: "Cada trabalho carrega uma historia, uma memoria, um significado unico.",
  },
  {
    icon: MapPin,
    title: "Atendimento Domiciliar",
    description: "Conforto e privacidade. Vou ate voce em Sao Paulo e regiao.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Sobre Mim</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ola, sou a Sofia!
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou aprendiz de tatuagem apaixonada pela arte de transformar memorias 
                em arte permanente. Cada tatuagem que faco carrega um pedaco da historia 
                de quem a escolhe.
              </p>
              <p>
                Ofereco atendimento domiciliar em Sao Paulo e regiao, proporcionando 
                conforto e privacidade para uma experiencia mais tranquila e personalizada.
              </p>
              <p className="text-primary font-medium italic">
                &quot;Tato, onde a memoria se faz pele.&quot;
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
