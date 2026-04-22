import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote:
      "После нескольких сеансов с Игорем Анатольевичем хроническая боль в спине, с которой я жила годами, ушла. Но главное — я снова почувствовала себя живой и целой.",
    author: "Елена М.",
    detail: "Уфа",
  },
  {
    quote:
      "Я обратился с тревожностью и ощущением потери смысла. Игорь Анатольевич помог мне найти себя заново. Это не просто терапия — это путешествие к себе.",
    author: "Андрей К.",
    detail: "Уфа",
  },
  {
    quote:
      "Удивительно, как через работу с телом можно исцелить то, что годами мешало в отношениях и карьере. Благодарна за этот опыт.",
    author: "Наталья В.",
    detail: "Уфа",
  },
  {
    quote:
      "Обратилась с паническими атаками — уже после первого сеанса почувствовала, как отпускает. Игорь Анатольевич работает очень бережно и внимательно.",
    author: "Марина С.",
    detail: "Уфа",
  },
  {
    quote:
      "Долго не мог найти причину постоянной усталости. Врачи говорили, что всё в норме. Игорь Анатольевич за две встречи нашёл то, что другие не видели.",
    author: "Роман Д.",
    detail: "Уфа",
  },
  {
    quote:
      "Работали с детской травмой, которая много лет влияла на мою жизнь. Процесс был непростым, но результат превзошёл все ожидания. Очень благодарна.",
    author: "Ольга Т.",
    detail: "Уфа",
  },
  {
    quote:
      "Пришла с хронической усталостью и раздражительностью. После курса работы с Игорем Анатольевичем вернулась радость жизни и энергия, которой не было много лет.",
    author: "Светлана Р.",
    detail: "Уфа",
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="reviews" className="py-32 lg:py-40 px-6 lg:px-12 bg-sage">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className={`text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Отзывы
        </p>

        {/* Quote Mark */}
        <div
          className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <svg className="w-16 h-16 mx-auto text-primary-foreground/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote */}
        <blockquote
          className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground leading-relaxed mb-10 text-balance transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {testimonials[active].quote}
        </blockquote>

        {/* Attribution */}
        <div
          className={`mb-10 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-widest uppercase text-primary-foreground/80">{testimonials[active].author}</p>
          <p className="text-sm text-primary-foreground/60 mt-1">{testimonials[active].detail}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary-foreground scale-125" : "bg-primary-foreground/30 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}