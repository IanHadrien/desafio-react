import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeProvider'
import './style.css'

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="mt-1 ml-3">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        data-testid="checkbox"
        checked={theme === 'dark'}
        onChange={toggleDarkMode}
      />
      <label htmlFor="checkbox" className="checkbox-label border border-gray-100 dark:border-bluedark bg-gray-100 dark:bg-dark transition-colors">
        <Sun className="fa-sun" />
        <Moon className="fa-moon" />
        <span className="ball bg-gray-900 dark:bg-bluedark"></span>
      </label>
    </div>
  )
}
