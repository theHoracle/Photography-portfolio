"use client"
import { ReactNode, useState } from "react"
import QueryProvider from "./QueryProvider"
import { QueryClient } from "@tanstack/react-query"
import { ThemeProvider } from "./ThemeProviders"


// const queryClient = new QueryClient()
 const Providers: React.FC<{ children: ReactNode }> = ({children}) => {
  const [queryClient] = useState(() => new QueryClient());
    return (
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
          )
        }

export default Providers