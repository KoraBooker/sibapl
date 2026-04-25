import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Scope } from "@/components/scope"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Scope />
      <Process />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
