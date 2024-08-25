import { QueryClientProvider, QueryClientProviderProps } from "@tanstack/react-query"
import { ThemeProvider } from "./ThemeProviders"


const QueryProvider = ({client, children}: QueryClientProviderProps) => {
    return <QueryClientProvider client={client} >
            {children}
        </QueryClientProvider>
}

export default QueryProvider