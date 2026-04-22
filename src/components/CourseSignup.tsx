import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

export function CourseSignup() {
  const [isVisible, setIsVisible] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", question: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    await new Promise((r) => setTimeout(r, 1000))
    setStatus("sent")
  }

  return (
    <section ref={sectionRef} id="course" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/40">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Созидательное Развитие</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            Базовый курс
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            Приглашаем всех желающих на обучение Базовому уровню уникальной авторской методики Системы Созидательного Развития.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left — info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Автор курса</p>
              <p className="text-foreground text-lg font-medium">Золотарёва Наталья Леонидовна</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Преподаватель</p>
              <p className="text-foreground text-lg font-medium">Слепеньков Игорь Анатольевич</p>
              <p className="text-muted-foreground text-sm mt-1">Преподаватель Системы Созидательного Развития</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Сайт и сообщество</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://so-razvitye.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-sage transition-colors"
                >
                  <Icon name="Globe" size={16} />
                  so-razvitye.ru
                </a>
                <a
                  href="https://t.me/sorazvitye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-sage transition-colors"
                >
                  <Icon name="Send" size={16} />
                  t.me/sorazvitye
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
                <div className="text-sage"><Icon name="CheckCircle" size={48} /></div>
                <p className="font-serif text-2xl text-foreground">Заявка принята</p>
                <p className="text-muted-foreground">Я свяжусь с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Как вас зовут?"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Телефон / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-sage transition-colors"
                    placeholder="+7 ..."
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Вопрос или комментарий</label>
                  <textarea
                    rows={4}
                    value={form.question}
                    onChange={(e) => setForm({ ...form, question: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-sage transition-colors resize-none"
                    placeholder="Что вас интересует в курсе?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Icon name="Loader" size={16} />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={16} />
                      Записаться на курс
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}