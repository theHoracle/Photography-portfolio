
import CreateProject from "@/components/admin-components/CreateProject";
import { Services, Work } from "@prisma/client";

export const fetchServices = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/services`)
    if(!res.ok) {
        throw new Error("FETCH SERVICES FAILED")
    }
    return res.json()
}

export default async function AddProjectDetails() {
    const data = await fetchServices()
    const services: Services[] | undefined = data.services
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <CreateProject services={services}/> 
    </div>
  )
}
