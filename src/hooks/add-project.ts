import api from "@/utils/api"
import { useMutation } from "@tanstack/react-query"


type NewProject = {
    title: string
    description: string
    slug: string
    imgs: string[]
    serviceSlug: string
}

const addProject = async (addProject: NewProject) => {
    const res = await api.post("/projects", addProject)
}

export const useAddProject = () => {
    return useMutation({
        mutationFn: addProject,
        mutationKey: ["newProject"],
        onSuccess: () => {
            console.log("success")
            
        },
        onError: (error) => {
            console.log("error", error)
        }
    })
}