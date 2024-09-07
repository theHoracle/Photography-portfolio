"use client"
import { ReactNode, useState } from "react"
import QueryProvider from "./QueryProvider"
import { QueryClient } from "@tanstack/react-query"
import { ThemeProvider } from "./ThemeProviders"
import AuthProvider from "./AuthProvider"


// const queryClient = new QueryClient()
 const Providers: React.FC<{ children: ReactNode }> = ({children}) => {
  const [queryClient] = useState(() => new QueryClient());
    return (
      <AuthProvider>
       <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
         >
          <QueryProvider  client={queryClient}>
                {children}
              </QueryProvider>
         </ThemeProvider>
      </AuthProvider>
          )
        }

export default Providers