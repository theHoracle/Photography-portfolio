import { auth } from "@/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { create } from "zustand";

type AuthState = {
    user: User | null;
    setUser: (user: User | null) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
  };

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
    loading: true,
    setLoading: (loading: boolean) => set({ loading }),
}))

export const useAuth = () => {
    const {user, loading, setLoading, setUser} = useAuthStore()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
                if(pathname.includes("/admin")) {
                    router.push('/sign-in')
                }
            }
        })

        return () => unsubscribe() 
    }, [router, setLoading, setUser, pathname])

    return {user, loading}
}