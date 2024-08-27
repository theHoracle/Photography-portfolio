import CreateProject from "@/components/admin-components/CreateProject"
import { getServices } from "@/hooks/get-services"

const AddNewProject = async ( ) => {
    const services = await getServices()

    return <>
    {
        services &&
        <CreateProject services={services} />}
    </>
}
export default AddNewProject