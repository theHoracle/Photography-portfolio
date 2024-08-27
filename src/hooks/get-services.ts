import { useQuery } from "@tanstack/react-query"
import api from "@/utils/api";
import prisma from "@/utils/prisma";

export const getServicesAndProjects = async () => {
    try {
        const servicesAndProjects = await prisma.services.findMany({
            include: {
                projects: true
            }
        });
        return servicesAndProjects;
    } catch (error) {
        console.error('Failed to fetch services and projects:', error);
        throw new Error('Failed to fetch services and projects. Please try again later.');
    }
};


export const getServices = async () => {
    try {
        const services = await prisma.services.findMany()
        return services
    } catch (error) {
        console.error('Failed to fetch services:', error)
        throw new Error('Failed to fetch services. Please try again later.')
    }
}
// export const useGetServicesAndWorks = (initialData: any) => {
//     return useQuery({
//         initialData,
//         queryKey: ["services"],    
//     });
// };

// export const useGetServices = (initialData: any) => {
//     return useQuery({
//         initialData,
//         queryKey: ["services"],    
//     });
// };
