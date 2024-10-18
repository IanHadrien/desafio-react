import { BiPlusCircle } from "react-icons/bi";
import Header from "../components/Header";
import ModeToggle from "../components/ModeToggle";
import { TableComponent } from "@/pages/components/Table";
import Input from "@/components/form/input";

export default function Index() {

  const dataTest = [
    {
      id: '1',
      nome: 'Teste',
      descricao: 'teste',
      data: '28/90/2024',
      prioridade: 'alta'
    },
    {
      id: '2',
      nome: 'Teste 2',
      descricao: 'teste 2',
      data: '28/90/2024',
      prioridade: 'baixa'
    },
  ]

  return (
    <main className="bg-white dark:bg-gray600 h-screen">
      <Header />

      <section className="w-2/3 m-auto">
        <div className="flex flex-1 justify-between gap-2 -mt-6">
          <Input />

          <button className="border-none flex items-center h-12 p-4 bg-bluedark text-gray100 rounded-lg gap-2 font-bold text-xs transition hover:bg-blue">
            Pesquisar
            <BiPlusCircle size={16} color="#f2f2f2" />
          </button>
        </div>

        <div className="mt-4">
          <TableComponent data={dataTest} />
        </div>
      </section>
    
      <ModeToggle />
    </main>
  )
}
