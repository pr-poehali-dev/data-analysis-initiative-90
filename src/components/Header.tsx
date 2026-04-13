import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-serif text-xl tracking-wide text-foreground leading-tight">
            <span className="block">Игорь Слепеньков</span>
            <span className="block text-xs tracking-[0.2em] text-muted-foreground font-sans font-light uppercase">Онтолог · Кинезиолог · Остеопат</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#biography"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Биография
            </a>
            <a
              href="#services"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Методы
            </a>
            <a
              href="#seminars"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Семинары
            </a>
            <a
              href="#reviews"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Контакты
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Открыть меню"
          >
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-64 pb-8" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-6 pt-4">
            <a
              href="#biography"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Биография
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Методы
            </a>
            <a
              href="#seminars"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Семинары
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}