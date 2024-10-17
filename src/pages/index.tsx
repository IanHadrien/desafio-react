import { BiPlusCircle } from "react-icons/bi";
import Header from "../components/Header";

export default function Index() {
  return (
    <main className="bg-gray600 h-screen">
      <Header />

      <section>
        <div className="flex flex-1 justify-between gap-2 w-1/2 m-auto">
          <input 
            type="text" 
            placeholder="Pesquisa a tarefa"
            className="px-4 border border-gray700 rounded-lg bg-gray500 text-gray100 h-12 w-full placeholder:text-gray300 focus:border-purpledark"
          />

          <button className="border-none flex items-center h-12 p-4 bg-bluedark text-gray100 rounded-lg gap-2 font-bold text-xs transition hover:bg-blue">
            Pesquisar
            <BiPlusCircle size={16} color="#f2f2f2" />
          </button>
        </div>
      </section>
    </main>
  )
}
