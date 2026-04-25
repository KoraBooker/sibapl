import { CreditCard, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-bold text-[#0a1628] text-xl mb-3">Reservation ready</h3>
        <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl">
          I will process your reservation in Korea today.
          Send me your request, and {"I'll"} take care of everything from local communication,
          payment adjustment, confirmation, etc.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://forms.gle/BK9yGV3wMpvAGFhE9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-[#0a1628] text-[#0a1628] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Make a reservation now
          </a>
          <a 
            href="https://paypal.me/korabooker?country.x=KR&locale.x=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-[#0a1628] text-[#0a1628] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            Pay now
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            KoraBooker - Your Korea Reservation Partner
          </p>
        </div>
      </div>
    </footer>
  )
}
