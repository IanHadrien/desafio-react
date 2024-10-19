import { CiCircleList } from "react-icons/ci";

export default function Header() {
  return (
    <header className="bg-gray-300 dark:bg-gray700 w-full h-48">
      <div className="flex items-center justify-center text-ignite-gary100 h-full">
        <CiCircleList size={40} color="#015958" />
        <p className="px-3 text-[#015958] text-4xl font-black">
          <span className="text-ignite-purpleDark">Desafio </span>
          <span>React</span>
        </p>
      </div>
    </header>
  )
}
