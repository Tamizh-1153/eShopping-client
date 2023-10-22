import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./store"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const root = ReactDOM.createRoot(document.getElementById("root"))
  const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
