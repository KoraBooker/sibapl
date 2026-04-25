import { MessageCircle, Instagram, Mail, FileText, CreditCard } from "lucide-react"

export function Contact() {
  const channels = [
    {
      icon: <MessageCircle className="w-10 h-10 text-green-500" />,
      title: "WhatsApp",
      subtitle: "Questions",
      buttonText: "Chat on WhatsApp",
      buttonColor: "bg-green-500 hover:bg-green-600 text-white",
      href: "https://wa.me/821086877964"
    },
    {
      icon: <Instagram className="w-10 h-10 text-[#ff6b5b]" />,
      title: "Instagram",
      subtitle: "Follow & DM",
      buttonText: "Visit Instagram",
      buttonColor: "bg-[#ff6b5b] hover:bg-[#ff5a48] text-white",
      href: "https://www.instagram.com/korabooker_"
    },
    {
      icon: <Mail className="w-10 h-10 text-gray-500" />,
      title: "E-mail",
      subtitle: "Send Details",
      buttonText: "Send Email",
      buttonColor: "bg-white hover:bg-gray-50 text-[#0a1628] border border-gray-300",
      href: "mailto:korabookerkr@gmail.com"
    },
    {
      icon: <FileText className="w-10 h-10 text-gray-500" />,
      title: "Reservation",
      subtitle: "Request Form",
      buttonText: "Open Google Form",
      buttonColor: "bg-white hover:bg-gray-50 text-[#0a1628] border border-gray-300",
      href: "https://forms.gle/rfwdXTAibotkQeHv8"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0a1628] mb-2">Reservation ready</h2>
        <h3 className="text-xl font-semibold text-[#0a1628] mb-3">{"Today's reservation starts"}</h3>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Please contact us via WhatsApp for the quickest response,
          or via Instagram or email.
          We will guide you through the entire booking process.
        </p>

        {/* Contact Channels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {channels.map((channel, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {channel.icon}
              </div>
              <h4 className="font-bold text-[#0a1628] mb-1">{channel.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{channel.subtitle}</p>
              <a 
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${channel.buttonColor}`}
              >
                {channel.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://paypal.me/korabooker?country.x=KR&locale.x=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#0a1628] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#0a1628]/90 transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            Pay now
          </a>
          <a 
            href="https://forms.gle/BK9yGV3wMpvAGFhE9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#ff6b5b] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#ff5a48] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Make a reservation now
          </a>
        </div>
      </div>
    </section>
  )
}
