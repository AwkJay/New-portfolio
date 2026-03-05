export function LogoMarquee() {
  const items = [
    { logo: "/logos/application.svg", alt: "React" },
    { logo: "/logos/business.svg", alt: "GenAI" },
    { logo: "/logos/company.svg", alt: "Python" },
    { logo: "/logos/startup.svg", alt: "Security Research" },
    { logo: "/logos/venture.svg", alt: "PostgreSQL" },
    { logo: "/logos/agency.svg", alt: "Blockchain" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <img key={index} src={item.logo || "/placeholder.svg"} alt={item.alt} className="h-12 w-auto" />
          ))}
        </div>
      </div>
    </div>
  )
}
