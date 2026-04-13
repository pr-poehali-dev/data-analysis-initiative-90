import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const seminars = [
  {
    date: "Май 2025",
    title: "Семинар созидательного развития",
    description: "Глубинная работа с жизненными сценариями. Практики телесного осознавания, групповая терапия и онтологические упражнения для выхода на новый уровень.",
    duration: "2 дня",
    format: "Очно · Уфа",
  },
  {
    date: "Июнь 2025",
    title: "Тело как мудрость",
    description: "Интенсив по кинезиологии и остеопатии для тех, кто хочет научиться слышать сигналы своего тела и восстановить природную саморегуляцию.",
    duration: "1 день",
    format: "Очно · Уфа",
  },
  {
    date: "Сентябрь 2025",
    title: "Исцеление через целостность",
    description: "Авторская программа Игоря Анатольевича. Интеграция всех методов: психология, гештальт, онтология, телесные практики. Для глубокой личностной трансформации.",
    duration: "3 дня",
    format: "Очно · Уфа",
  },
]

export function Seminars() {
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
    <section ref={sectionRef} id="seminars" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Расписание
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Семинары созидательного
              <span className="italic"> развития</span>
            </h2>
            <p
              className={`text-muted-foreground max-w-xs leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Групповые программы для тех, кто готов к переменам
            </p>
          </div>
        </div>

        {/* Seminars List */}
        <div className="space-y-0">
          {seminars.map((seminar, index) => (
            <div
              key={seminar.title}
              className={`group py-10 lg:py-14 border-t border-border last:border-b flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Date */}
              <div className="md:w-32 flex-shrink-0">
                <p className="font-serif text-sage text-lg">{seminar.date}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{seminar.duration}</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:text-sage transition-colors duration-500">
                  {seminar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">{seminar.description}</p>
                <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground">
                  <Icon name="MapPin" size={14} />
                  {seminar.format}
                </div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 flex items-start">
                <a
                  href="tel:+79174440090"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-sage hover:text-foreground border border-sage hover:border-foreground px-6 py-3 transition-all duration-500"
                >
                  Записаться
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
