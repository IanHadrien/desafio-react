import { CiCircleList } from "react-icons/ci"
import ModeToggle from "./mode-toggle/ModeToggle"

export default function Header() {
  return (
    <header className="bg-gray-300 dark:bg-gray700 w-full h-48 transition-colors">
      <div className="flex items-center justify-center text-ignite-gary100 h-full">
        <CiCircleList size={40} className="text-[#015958] dark:text-bluedark" />
        <p className="px-3 text-[#015958] dark:text-bluedark text-4xl font-black">
          <span className="text-ignite-purpleDark">Lista de Tarefas </span>
        </p>
        <ModeToggle />
      </div>
    </header>
  )
}
