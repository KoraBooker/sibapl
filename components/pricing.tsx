import { Check, X, AlertCircle } from "lucide-react"

export function Pricing() {
  const policies = [
    {
      icon: <AlertCircle className="w-5 h-5 text-[#ff6b5b]" />,
      title: "Payment not possible before confirmation",
      description: "We only pay once the reservation is confirmed and confirmed."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-[#ff6b5b]" />,
      title: "Full refund if reservation cannot be completed",
      description: "If you are unable to complete your booking request, you will receive a full refund without any questions."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-[#ff6b5b]" />,
      title: "Check and make changes",
      description: "If you need to modify your reservation after checking, check the location and process the changes according to the policy."
    },
    {
      icon: <X className="w-5 h-5 text-[#ff6b5b]" />,
      title: "Cancel",
      description: "Customer Refunds for cancellations initiated by customers depend on the venue's cancellation policy. We will inform you of the terms and conditions before payment."
    },
    {
      icon: <X className="w-5 h-5 text-[#ff6b5b]" />,
      title: "No-show policy",
      description: "No show is non-refundable. Please check if you can attend the confirmed reservation."
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0a1628] mb-2">service charge</h2>
        <p className="text-gray-600 mb-10">Transparent pricing. No surprise.</p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Price */}
          <div>
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="bg-[#ff6b5b] text-white p-8 rounded-xl inline-block">
                <div className="text-5xl font-bold mb-2">$12</div>
                <p className="text-sm opacity-90">{"It's 12 dollars for sure."}</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 mb-5 leading-relaxed">
                  Our service fee is flat rate and simple.
                  You can only pay once your reservation is confirmed,
                  and we will handle all communication with the venue.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700">No advance payment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700">Payment only after confirmation</span>
                  </div>
                </div>
                <div className="mt-5 bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-sm text-orange-800">
                    <strong>Some reservations may require advance payment.</strong><br />
                    In this case, we will inform you in advance and proceed with approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border-t pt-8">
              <h3 className="font-bold text-[#0a1628] text-lg mb-5">Payment method</h3>
              <p className="text-sm text-gray-600 mb-4">Allow the following payment methods:</p>
              <div className="flex gap-4 mb-6">
                <div className="bg-[#003087] text-white px-5 py-3 rounded-lg text-sm font-bold">
                  PayPal
                </div>
                <div className="flex items-center gap-2 border border-gray-300 px-4 py-3 rounded-lg">
                  <div className="w-6 h-6 bg-[#ff6600] rounded-full" />
                  <span className="font-bold text-[#0a1628]">Payoneer</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">Payment will only be requested once your reservation has been confirmed.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">Secure Payment</span>
                    <p className="text-sm text-gray-500 mt-1">
                      All payments will be processed safely.
                      I will always let you know in advance if payment is required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Policy */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
            <h3 className="font-bold text-[#0a1628] text-xl mb-3">Refund and Payment Policy</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Clear terms to protect both you
              and the booking process.
              The refund policy is designed around trust.
            </p>
            <div className="space-y-5">
              {policies.map((policy, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-0.5">{policy.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#0a1628] mb-1">{policy.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{policy.description}</p>
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
