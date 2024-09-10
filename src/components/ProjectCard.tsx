import { getMonthAndYear } from "@/lib/utils"
import { Project } from "@prisma/client"
import Image from "next/image"
import Link  from "next/link"

const ProjectCard = ({imgs, title, createdAt, slug}: Project) => {
  
    return <div className="max-w-[500px] mx-auto md:mx-0 flex flex-col gap-2 w-full">
      <div className="relative overflow-hidden rounded-xl aspect-square">
        <Image
        src={imgs[0]}
        fill
        alt={`${title} img`}
        className="object-cover object-center size-full"
         />
      </div>
      <div className="flex items-start justify-between gap-2 px-1.5 w-full">
        <div className="flex-1 flex flex-col gap-0.5">
          <h5 className="truncate capitalize font-semibold leading-5">{title}</h5>
          <span className="text-xs leading-4">{getMonthAndYear(createdAt)}</span>
        </div>
        <div className="flex justify-end uppercase">
          <Link href={`/portfolio/project/${slug}`}  className="flex max-w-fit gap-1 py-0.5 items-end text-xs justify-end border-b-2 border-accent hover:border-background" >
          View Project <UpRightArrow />
          </Link>
        </div>
      </div>
    </div>
  }
export default ProjectCard;


export const UpRightArrow = () => {
  return <svg width="15" height="15" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.91601 0.75L16.166 0.75C16.3649 0.75 16.5557 0.829018 16.6963 0.96967C16.837 1.11032 16.916 1.30109 16.916 1.5V12.75C16.916 13.1642 16.5802 13.5 16.166 13.5C15.7518 13.5 15.416 13.1642 15.416 12.75V3.31066L1.69635 17.0303C1.40345 17.3232 0.928579 17.3232 0.635686 17.0303C0.342792 16.7374 0.342792 16.2626 0.635686 15.9697L14.3554 2.25L4.91601 2.25C4.5018 2.25 4.16601 1.91421 4.16601 1.5C4.16601 1.08579 4.5018 0.75 4.91601 0.75Z" fill="white"/>
  </svg>
  
}