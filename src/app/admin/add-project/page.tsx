
import CreateProject from "@/components/admin-components/CreateProject";
import { getServices } from "@/hooks/get-services";
import { Services, Work } from "@prisma/client";


export default async function AddProjectDetails() {
    const data = await getServices()
    const services: Services[] | undefined = data.services
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <CreateProject services={services}/> 
    </div>
  )
}
