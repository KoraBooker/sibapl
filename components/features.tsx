import { Settings, CheckCircle, MapPin } from "lucide-react"

export function Features() {
  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-5">
              <Settings className="w-12 h-12 text-[#0a1628]" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-3">Check Priority Flow</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We handle local phone authentication,<br />
              Korean payment method, and all place<br />
              communication on your behalf.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-5">
              <CheckCircle className="w-12 h-12 text-[#0a1628]" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-3">
              Payment after<br />reservation is completed
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Payment will not be made until your<br />
              reservation is confirmed.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-5">
              <MapPin className="w-12 h-12 text-[#0a1628]" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-3">
              Premium Seoul<br />Concierge Style
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We will keep you updated<br />
              at every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
