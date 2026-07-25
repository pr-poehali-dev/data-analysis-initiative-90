import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

export function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("announcement-shown")
    if (alreadyShown) return

    const showTimer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem("announcement-shown", "true")
      requestAnimationFrame(() => setIsVisible(true))
    }, 2000)

    return () => clearTimeout(showTimer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-start justify-center sm:justify-end p-4 sm:p-6 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-sm bg-background border border-border shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-start gap-3 p-4 border-b border-border bg-sand/40">
          <div className="w-11 h-11 rounded-full bg-sage flex items-center justify-center flex-shrink-0 text-primary-foreground font-serif text-lg">
            ИС
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">Игорь Анатольевич Слепеньков</p>
            <p className="text-xs text-muted-foreground">только что</p>
          </div>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label="Закрыть"
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
            {`Дорогие друзья, у меня для вас потрясающие новости! 🌟

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

Готовы исследовать свою вселенную? 🚀 Записывайтесь на сессию✨`}
          </p>
        </div>

        <div className="p-4 pt-0">
          <a
            href="#contact"
            onClick={handleClose}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-300 rounded-lg"
          >
            Записаться на сессию
          </a>
        </div>
      </div>
    </div>
  )
}
