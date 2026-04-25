import { Clock, CreditCard, Users, HeadphonesIcon } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[650px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20260424_223250118-3Ev5WuH2nub1gBBmC7ivXS0vfhRDcs.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Support for<br />
            reservations in Korea<br />
            for international travelers
          </h1>
          
          <p className="text-[#ff6b5b] font-semibold text-lg mb-4">
            {"Can't I make a reservation in Korea?"}
          </p>
          
          <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-md">
            We will process your reservation.
            There are still many places in Korea that expect
            local phone numbers, local payment methods,
            or Korean communication.
            Cora Booker turns these friction into a guided
            concierge-style process.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex flex-col items-center text-center w-20">
              <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center mb-3 bg-white/5 backdrop-blur-sm">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xs font-medium">24 hours</span>
              <span className="text-white/60 text-[10px] mt-1">a general first reaction</span>
            </div>
            <div className="flex flex-col items-center text-center w-20">
              <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center mb-3 bg-white/5 backdrop-blur-sm">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xs font-medium">{"After it's over"}</span>
              <span className="text-white/60 text-[10px] mt-1">Payment only after confirmation</span>
            </div>
            <div className="flex flex-col items-center text-center w-20">
              <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center mb-3 bg-white/5 backdrop-blur-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xs font-medium">1:1 Human support</span>
              <span className="text-white/60 text-[10px] mt-1">for all requests</span>
            </div>
            <div className="flex flex-col items-center text-center w-24">
              <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center mb-3 bg-white/5 backdrop-blur-sm">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xs font-medium">a way to help</span>
              <span className="text-white/60 text-[10px] mt-1 leading-tight">We handle local phone authentication, Korean payment method, and all place communication on your behalf.</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://paypal.me/korabooker?country.x=KR&locale.x=ko_KR" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0a1628] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:bg-[#0a1628]/90 transition-colors"
            >
              <CreditCard className="w-4 h-4" />
              Pay now
            </a>
            <a 
              href="https://forms.gle/BK9yGV3wMpvAGFhE9" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white/60 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Make a reservation now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
