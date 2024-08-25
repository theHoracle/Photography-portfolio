import CreateProject from "@/components/admin-components/CreateProject"
import { getServices } from "@/hooks/get-services"

const AddNewProject = async ( ) => {
    const data = await getServices()
    const services = data?.services

    return <CreateProject services={services} />
}
export default AddNewProject