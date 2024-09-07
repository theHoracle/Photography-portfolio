"use client"

import { useAuth } from "@/store/authStore"

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const { loading } = useAuth()

    return loading ? 
            <div>Loading</div> :
            <>
            {children}
            </>
}
export default AuthProvider;