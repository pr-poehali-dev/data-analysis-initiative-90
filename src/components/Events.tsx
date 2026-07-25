import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const POST_TEXT = `Дорогие друзья, у меня для вас потрясающие новости! 🌟

В своей работе я выхожу на новый уровень точности! Теперь моим верным помощником стал прибор динамической НЕЙРОДЕТЕКЦИИ (разработанный Кузнецовым А.Е.). 🔬

Это не просто техника, это мой «рентгеновский взгляд» на ваше подсознание. 🧠

В чем суть?
Нейродетектор (упрощенный аналог ЭЭГ) позволяет мне видеть ту самую тонкую грань, где заканчиваются ваши фантазии и начинается истинный, реальный опыт. Мы больше не гадаем — мы точно знаем, какие области ментального пространства нуждаются в исцелении прямо сейчас. 🎯

Что происходит на сессии?
Мы отправляемся в захватывающий ментальный сёрфинг! 🏄‍♂️ Мы буквально «пробиваем» высокие слои сознания и порой выходим в саму Ноосферу — единое ментальное поле человечества (спасибо Вернадскому за такое глубокое понятие!). 🌌 Это путешествие вглубь себя, которое меняет всё вокруг.

Немного магии науки (ЭЭГ простыми словами):
Наш мозг говорит на языке электричества и химии. ⚡️ Нейроны общаются друг с другом, создавая потенциалы действия. Сигналы одного нейрона слишком слабы, но нейродетектор улавливает их синхронный «хор»! Это позволяет увидеть связь между вашими эмоциями и волнами мозга.
Я не просто смотрю на графики. Я анализирую ритмы, чтобы отделить истинные переживания от «шума» мышц и кожи (да, наука тут очень тонкая, и даже у нее есть свои загадки! 😉).

Мы с вами делаем сессии не просто глубокими, а максимально точечными.
Только точная работа с вашим внутренним миром через высокие технологии и глубокое понимание процессов.

Готовы исследовать свою вселенную? 🚀 Записывайтесь на сессию✨`

export function Events() {
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
    <section ref={sectionRef} id="events" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <p
          className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          События
        </p>
        <h2
          className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-14 text-balance text-center transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Новости и обновления
        </h2>

        <div
          className={`bg-sand/40 border border-border rounded-2xl overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 p-6 border-b border-border">
            <div className="w-11 h-11 rounded-full bg-sage flex items-center justify-center flex-shrink-0 text-primary-foreground font-serif text-lg">
              ИС
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Игорь Анатольевич Слепеньков</p>
              <p className="text-xs text-muted-foreground">Новая методика работы</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-sm md:text-base text-foreground leading-relaxed whitespace-pre-line">{POST_TEXT}</p>
          </div>

          <div className="p-6 pt-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500 rounded-lg"
            >
              <Icon name="CalendarCheck" size={16} />
              Записаться на сессию
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
