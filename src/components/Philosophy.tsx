import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="biography" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo placeholder */}
          <div
            className={`relative aspect-[4/5] bg-sand overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src="https://cdn.poehali.dev/projects/5cbb501a-bde2-4fd5-b15f-6d8a52333341/bucket/25440f92-f3f4-4677-b415-3444766753f7.jpg"
              alt="Игорь Анатольевич Слепеньков"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Биография
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Путь к
              <span className="italic"> целостности</span>
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Более 20 лет я помогаю людям восстановить связь с собой — телом, душой и разумом. Мой путь объединяет
                онтологию, кинезиологию, гештальт-терапию и остеопатию в единый экологичный подход к исцелению.
              </p>
              <p>
                Я убеждён: тело обладает природной мудростью и способностью к самовосстановлению. Моя задача — помочь
                убрать преграды на этом пути, чтобы человек обрёл подлинную{" "}
                <em className="text-foreground">целостность</em> и жизненную силу.
              </p>
              <p>
                Принимаю в Уфе, работаю с самыми разными жизненными трудностями — от хронических болей и усталости
                до сложных эмоциональных состояний и потери смысла.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">20+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Лет опыта</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">5</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Методов</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">∞</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Изменений</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}