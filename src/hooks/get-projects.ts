import prisma from "@/utils/prisma"



export const getProjects = async () => {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return projects;
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        throw new Error("Failed to fetch projects. Please try again later.");
    }
}
export const getSingleProject = async (projectSlug: string | undefined) => {
    if (!projectSlug) {
        console.warn("No project slug provided");
        return null;
    }

    try {
        const project = await prisma.project.findUnique({
            where: {
                slug: projectSlug
            }
        });
        
        if (!project) {
            console.warn(`Project with slug "${projectSlug}" not found.`);
            return null;
        }
        
        return project;
    } catch (error) {
        console.error(`Error fetching project with slug "${projectSlug}":`, error);
        return null;
    }
}

// export const useGetProjects = ( ) => {
//     return useQuery({
//         queryKey: ['project'],
//         queryFn: getProjects
//     })
// }

// export const useGetSingleProject = (projectSlug:string) => {
//     return useQuery({
//         queryKey: ['single-project'],
//         queryFn: () => getSingleProject(projectSlug),
//     })
// }