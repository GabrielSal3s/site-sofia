"use client"

import { useState } from "react"
import { Send, MessageCircle, Instagram, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.nome || !formData.mensagem) {
      return
    }

    const texto = `Ola, meu nome e ${formData.nome}. ${formData.mensagem}`
    const numero = "5511999999999" // Numero de WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
    
    setIsSubmitted(true)
    window.open(url, "_blank")
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Contato</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pronta para fazer sua proxima tatuagem? Entre em contato e vamos transformar 
            sua ideia em arte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Conte sobre a tatuagem que deseja..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitted ? (
                  "Mensagem Enviada!"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511919001037"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Falar no WhatsApp</p>
                <p className="text-sm text-white/80">Respondo em ate 24h</p>
              </div>
            </a>

            {/* Other Contact Methods */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <a
                href="https://instagram.com/tato.handz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
              >
                <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">@tato.handz</p>
                  <p className="text-sm text-muted-foreground">Siga no Instagram</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="p-2 bg-secondary rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Sao Paulo, SP</p>
                  <p className="text-sm text-muted-foreground">Atendimento domiciliar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
