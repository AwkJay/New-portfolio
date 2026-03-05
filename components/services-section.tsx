import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Full-Stack Web Applications",
      description:
        "Designing and building end-to-end web applications with modern frontend frameworks, scalable backend APIs, and production-ready architectures.",
      image: "/images/web-design.svg",
    },
    {
      title: "AI-Powered Systems",
      description:
        "Building intelligent applications using machine learning and modern AI tooling to solve real-world problems and enhance user experiences.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Blockchain Applications",
      description:
        "Developing decentralized systems using smart contracts, Web3 integrations, and secure blockchain architectures on modern networks.",
      image: "/images/product-design.svg",
    },
    {
      title: "Security Research",
      description:
        "Discovering and responsibly disclosing web vulnerabilities. Recognized by NASA and Cisco Hall of Fame for impactful security findings.",
      image: "/images/user-research.svg",
    },
    {
      title: "Developer Community Leadership",
      description:
        "Leading blockchain initiatives at GDG on Campus IIIT Kalyani and contributing to large open-source programs and developer communities.",
      image: "/images/motion-graphics.svg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              What I <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">Build</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              I enjoy building systems across the stack — from intelligent AI applications and scalable backend services to decentralized blockchain platforms and security research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Interested in collaborating, hiring, or discussing a project? I'm always open to building impactful systems and solving challenging problems.
              </p>
              <a href="mailto:awnikantajay@gmail.com">
                <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
