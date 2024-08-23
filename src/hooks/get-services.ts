import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export const getServices = async () => {
    const res = await axios(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/services-and-works`)
    console.log(res)
    return res.data;
    
  };

export const useGetServices = (initialData: any) => {
    return useQuery({
        initialData,
        queryKey: ["services"],    
    });
};
