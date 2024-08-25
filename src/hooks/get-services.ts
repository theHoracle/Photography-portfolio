import { useQuery } from "@tanstack/react-query"
import api from "@/utils/api";

export const getServicesAndProjects = async () => {
    const res = await api("/services-and-projects")
    console.log(res)
    return res.data;
    
  };

export const getServices = async () => {
    const res = await api("/services")
    return res.data;
}


export const useGetServicesAndWorks = (initialData: any) => {
    return useQuery({
        initialData,
        queryKey: ["services"],    
    });
};

export const useGetServices = (initialData: any) => {
    return useQuery({
        initialData,
        queryKey: ["services"],    
    });
};
