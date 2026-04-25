import { HelpCircle } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "What's the difference between this and trying to book in person?"
    },
    {
      question: "When do I make the payment?"
    },
    {
      question: "What kind of requests can I send you?"
    },
    {
      question: "How can I contact you?"
    }
  ]

  return (
    <section id="faq" className="py-16 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-2">frequently asked questions</h2>
        <p className="text-white/60 text-sm mb-10">
          Answer to remove hesitation before contacting us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors cursor-pointer">
              <HelpCircle className="w-6 h-6 text-[#ff6b5b] flex-shrink-0" />
              <p className="text-white text-sm leading-relaxed">{faq.question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
