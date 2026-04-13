export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-1">Игорь Слепеньков</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Онтолог · Кинезиолог · Остеопат</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              20 лет помогаю людям обрести целостность — через естественное восстановление тела и души.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#biography" className="text-sm text-foreground hover:text-sage transition-colors">
                Биография
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Методы
              </a>
              <a href="#seminars" className="text-sm text-foreground hover:text-sage transition-colors">
                Семинары
              </a>
              <a href="#reviews" className="text-sm text-foreground hover:text-sage transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="https://vk.ru/id43931052" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                ВКонтакте
              </a>
              <a href="https://t.me/Igorslepenkov" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                Telegram
              </a>
              <a href="https://wa.me/79174440090" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                WhatsApp
              </a>
              <a href="https://www.instagram.com/igorslepenkov?igsh=aTBuZTV4YmVnN2xq" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                Instagram
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Приём</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+79174440090" className="text-sm text-foreground hover:text-sage transition-colors">
                +7 917 444-00-90
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                г. Уфа,<br />ул. Ростовская, 18Б
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Игорь Анатольевич Слепеньков. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Создано с намерением и заботой</p>
        </div>
      </div>
    </footer>
  )
}