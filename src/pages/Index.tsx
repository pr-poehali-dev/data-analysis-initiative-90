import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Services } from "@/components/Services"
import { Testimonials } from "@/components/Testimonial"
import { Contact } from "@/components/Contact"
import { CourseSignup } from "@/components/CourseSignup"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Testimonials />
      <Contact />
      <CourseSignup />
      <Footer />
    </main>
  )
}