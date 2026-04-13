import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { Seminars } from "@/components/Seminars"
import { Testimonials } from "@/components/Testimonial"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Process />
      <Seminars />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
