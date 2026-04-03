import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="TATO. handz logo"
              width={32}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-foreground">TATO.</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase -mt-1">handz</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/tato.handz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Sofia Silva - TATO. handz
          </p>
        </div>
      </div>
    </footer>
  )
}
