import { formatDate } from "@/lib/utils"
import { Project } from "@prisma/client"
import Image from "next/image"
import Link  from "next/link"

const WorkCard = ({imgs, title, createdAt, slug}: Project) => {
  const date = createdAt as unknown as string
    return <div className="max-w-[500px] mx-auto md:mx-0 flex flex-col gap-2 w-full">
      <div className="relative overflow-hidden rounded-xl aspect-square">
        <Image
        src={imgs[0]}
        fill
        alt={`${title} img`}
        className="object-cover object-center size-full"
         />
      </div>
      <div className="flex items-center justify-between gap-2 text-xs lg:text-sm w-full">
        <div className="flex-1">
          <h5 className="truncate capitalize">{title}</h5>
          <p className="text-[10px] lg:text-xs">{formatDate(date)}</p>
        </div>
        <div className="flex justify-end uppercase">
          <Link href={`/project/${slug}`}  className="flex max-w-fit gap-1 items-end text-xs justify-end border-b-2 border-accent hover:border-background" >
          View &#x2197;
          </Link>
        </div>
      </div>
    </div>
  }
export default WorkCard