import { Briefcase, Calendar, CreditCard } from "lucide-react"

export function Scope() {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0a1628] mb-3">Scope of Service</h2>
        <p className="text-gray-600 mb-10">
          It was created to remove the three biggest Korean reservation barriers.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <Briefcase className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-3">
              Professional booking partners<br />
              for visitors from abroad
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              handle all steps that require<br />
              local access.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <Calendar className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-3">
              Reservations that we can<br />
              help you with
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Restaurants, cafes, K-beauty appointments,
              classes, ticket experience, transportation-
              related reservations, and other Korean-only
              reservations that are difficult to access
              from abroad.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-7 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <CreditCard className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-3">
              Payment and communication<br />
              processing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              If the local payment method,
              Korean phone number, or Korean
              coordination is an obstacle, we will
              take the initiative to manage the
              process.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
