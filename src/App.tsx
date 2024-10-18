import { ThemeProvider } from "./contexts/ThemeProvider";
import Index from "./pages/index";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Index />
    </ThemeProvider>
  )
}
