import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Запись на приём
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Начните путь к себе
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Каждое исцеление начинается с первого шага. Запишитесь на приём — и мы вместе найдём
              путь к вашей целостности и здоровью.
            </p>

            {/* Contact Info */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Телефон / WhatsApp</p>
                <a href="tel:+79174440090" className="text-foreground hover:text-sage transition-colors text-lg">
                  +7 917 444-00-90
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Адрес приёма</p>
                <p className="text-foreground">г. Уфа, ул. Ростовская, д. 18Б</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Социальные сети</p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-sage transition-colors border border-border px-4 py-2 hover:border-sage"
                  >
                    <Icon name="MessageCircle" size={16} />
                    ВКонтакте
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-sage transition-colors border border-border px-4 py-2 hover:border-sage"
                  >
                    <Icon name="Send" size={16} />
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/79174440090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-sage transition-colors border border-border px-4 py-2 hover:border-sage"
                  >
                    <Icon name="Phone" size={16} />
                    WhatsApp
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-sage transition-colors border border-border px-4 py-2 hover:border-sage"
                  >
                    <Icon name="MessagesSquare" size={16} />
                    Max
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-sand/50 p-10 lg:p-14">
              <p className="font-serif text-3xl md:text-4xl text-foreground font-light mb-6 leading-tight">
                Личный приём в Уфе
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Принимаю индивидуально. Каждый сеанс — это отдельная встреча с вашим телом и душой,
                без спешки и шаблонов.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+79174440090"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
                >
                  <Icon name="Phone" size={16} />
                  Позвонить
                </a>
                <a
                  href="https://wa.me/79174440090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 border border-sage text-sage text-sm tracking-widest uppercase hover:bg-sage/10 transition-all duration-500"
                >
                  <Icon name="MessageCircle" size={16} />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
