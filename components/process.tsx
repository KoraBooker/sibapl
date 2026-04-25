import { Check } from "lucide-react"

export function Process() {
  const benefits = [
    "No Korean phone number required",
    "No Korean card or bank app needed",
    "No Korean language barrier during booking",
    "Direct updates on availability and confirmation",
    "Suitable for travelers planning from overseas",
    "Clear process built around trust before payment"
  ]

  const steps = [
    {
      number: "01",
      title: "Send reservation requests",
      description: "Write down the location, preferred date and time, number of people, etc."
    },
    {
      number: "02",
      title: "We check and adjust locally",
      description: "We contact the location to confirm the availability of the reservation, and handle the Korean communication or local process required for the reservation."
    },
    {
      number: "03",
      title: "Your reservation will be confirmed first",
      description: "Once your reservation is complete, we will provide you with confirmation details and the following instructions, so you will know exactly what is booked."
    },
    {
      number: "04",
      title: "I will pay after checking",
      description: "The last step is only after confirmation; this simplifies the system and lowers the risk to international customers."
    }
  ]

  return (
    <section id="process" className="py-20 bg-[#d4c4a8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - What we solve for you */}
          <div>
            <h2 className="text-3xl font-bold text-[#0a1628] mb-3">What we solve for you</h2>
            <p className="text-[#0a1628]/70 text-sm leading-relaxed mb-8">
              Every barrier between you and your Korea booking — handled.<br />
              International travelers face unique obstacles when booking in Korea.<br />
              KoraBooker removes each one so you can focus on enjoying your trip.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#0a1628] font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - How it works */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0a1628] mb-2">How it works</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              The process is as simple as a real service operation.<br />
              A four-step flow that provides a clearer face and<br />
              a stronger sense of security at each stage.
            </p>

            <div className="space-y-1">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#0a1628] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full min-h-[60px] bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-[#0a1628]">{step.title}</h4>
                      {index < steps.length - 1 && (
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
