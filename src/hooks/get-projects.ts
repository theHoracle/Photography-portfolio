import api from "@/utils/api"
import { useQuery } from "@tanstack/react-query"

const fetchProjects = async () => {
    const res = await api('/projects')
    return res.data
}

const fectchSingleProject = async (projectSlug: string) => {
    const res = await api.get(`/projects/${projectSlug}`)
    return res.data
}

export const useGetProjects = ( ) => {
    return useQuery({
        queryKey: ['project'],
        queryFn: fetchProjects,
    })
}

export const useGetSingleProject = (projectSlug:string) => {
    return useQuery({
        queryKey: ['single-project'],
        queryFn: () => fectchSingleProject(projectSlug),
    })
}