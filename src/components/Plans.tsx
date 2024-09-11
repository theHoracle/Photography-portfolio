import servicesData from "@/data/service-plans.json"
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import { Button } from "./ui/button";
import Link from "next/link";
import { UpRightArrow } from "./ProjectCard";
const Plans = () => {

  return (
     <div>
      {servicesData.services.map((service, index) => (
        <div key={index}>
          <div className="border-y border-accent">
            {/* desc */}
            <div className="flex items-center gap-10 border-b pb-10 border-accent">
              <div className="flex-1 mt-6 flex flex-col gap-8 items-start">
              <Heading className="text-xl">{service.category}</Heading>
              <Paragraph className="text-sm text-accent-foreground/50">{service.description}</Paragraph>
              <Link href="/portfolio" className="uppercase text-sm tracking-tight flex items-center gap-1 border-b hover:border-transparent pb-1 border-accent">View Projects <UpRightArrow /> </Link>
              </div>
              <div className="flex-1 relative">

              </div>
            </div>
            {/* pricing */}
            <div>
              <ul className="divide-y">
                {service.pricing.map((plan, index) => (
                  <li key={index}
                  className="py-14"
                  >
                    <div className="flex items-center gap-10">
                      <div className="flex-1 flex flex-col">
                        <p>{plan.type}</p>
                        <div className="flex gap-4 items-center">
                        <Heading>{plan.price}</Heading>
                        <Link href="/contact" className="uppercase text-xs border-b hover:border-transparent border-accent flex items-center gap-1 max-w-fit py-1 transition-all">Book a call <UpRightArrow className="size-4" /></Link>
                        </div>
                      </div>
                      <div className="flex-[3] flex flex-col gap-2">
                        {plan.features.map((feature, index) => (
                          <p key={index}
                          className="flex items-center gap-2 p-4 border border-accent rounded-lg"
                          >
                            <StarSvg />
                            {feature}</p>
                     ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      ))}
     </div>
  );
};

export default Plans;

const StarSvg = (props:any) => {
  return (
    <svg {...props} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_161_5652)">
<mask id="mask0_161_5652" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
<path d="M30 0H0V30H30V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_161_5652)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.3412 15C28.9153 15 29.4716 14.9229 30 14.7785C29.5799 14.6899 29.1443 14.6433 28.6979 14.6433H21.2782C20.0527 14.6433 18.9092 14.2922 17.9429 13.685C18.1541 12.4484 18.7369 11.263 19.6915 10.3084L24.4337 5.56641C24.8397 5.16036 25.1784 4.71253 25.4501 4.23678C25.0902 4.47119 24.7493 4.74624 24.4337 5.06194L19.1871 10.3084C18.3206 11.175 17.2637 11.7353 16.1511 11.9893C15.426 10.9655 15 9.71507 15 8.36513V1.6589C15 1.08466 14.9229 0.528435 14.7785 0C14.6899 0.420107 14.6433 0.855699 14.6433 1.30218V8.72184C14.6433 9.94733 14.2922 11.0908 13.685 12.0572C12.4485 11.8459 11.263 11.263 10.3084 10.3084L5.56641 5.56641C5.16036 5.16036 4.71253 4.82156 4.23678 4.55001C4.47119 4.90973 4.74624 5.25071 5.06194 5.56641L10.3084 10.8129C11.175 11.6795 11.7353 12.7363 11.9893 13.8489C10.9655 14.5739 9.71507 15 8.36513 15H1.6589C1.08466 15 0.528434 15.0771 0 15.2215C0.42011 15.3101 0.855704 15.3567 1.30218 15.3567H8.72184C9.94734 15.3567 11.0908 15.7079 12.0572 16.3151C11.8459 17.5515 11.263 18.7369 10.3084 19.6915L5.56641 24.4337C5.16038 24.8397 4.82157 25.2875 4.55002 25.7633C4.90974 25.5288 5.25071 25.2537 5.56641 24.9381L10.8129 19.6915C11.6795 18.825 12.7363 18.2648 13.8489 18.0107C14.5739 19.0345 15 20.285 15 21.635V28.3412C15 28.9153 15.0771 29.4716 15.2215 30C15.3101 29.5799 15.3567 29.1443 15.3567 28.6979V21.2781C15.3567 20.0526 15.7079 18.9092 16.3151 17.9429C17.5515 18.1541 18.7369 18.7369 19.6915 19.6915L24.4337 24.4337C24.8397 24.8397 25.2875 25.1784 25.7633 25.4501C25.5288 25.0902 25.2537 24.7493 24.9381 24.4337L19.6915 19.1871C18.825 18.3206 18.2648 17.2637 18.0108 16.1511C19.0345 15.426 20.285 15 21.635 15H28.3412Z" fill="#474752"/>
</g>
</g>
<defs>
<clipPath id="clip0_161_5652">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>

  )
}