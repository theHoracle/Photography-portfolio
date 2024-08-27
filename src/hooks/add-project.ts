import api from "@/utils/api"
import prisma from "@/utils/prisma"
import { useMutation } from "@tanstack/react-query"


type NewProject = {
    title: string
    description: string
    slug: string
    imgs: string[]
    serviceSlug: string
}

const addProject = async (addProject: NewProject) => {
    try {
        const newProject = await prisma.project.create({
            data: {
                ...addProject
            }
        })
        return newProject;    
    } catch (error) {
        console.log("Could not add new project")
    }
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