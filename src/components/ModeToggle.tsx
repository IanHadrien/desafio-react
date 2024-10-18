import { useTheme } from "../contexts/ThemeProvider"

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div>
      <button
        onClick={() => setTheme("light")}
        className="text-white border"
      >
        Claro
        {theme === "light" && <span>Claro ckeck</span>}
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="text-white border"
      >
        Escuro
        {theme === "dark" && <span>dark dark</span>}
      </button>
    </div>
  )
}