import { Toaster } from "./components/ui/toaster";
import { ItensContextProvider } from "./contexts/ItensContext";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Index from "./pages/index";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ItensContextProvider>
        <Index />
        <Toaster />
      </ItensContextProvider>
    </ThemeProvider>
  )
}
