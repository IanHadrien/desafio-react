import { BiPlusCircle } from 'react-icons/bi'
import Header from '../components/Header'
import ModeToggle from '../components/ModeToggle'
import { TableComponent } from '@/pages/components/Table'
import Input from '@/components/form/input'
import { useContext } from 'react'
import { ItensContext } from '@/contexts/ItensContext'

export default function Index() {
  const { itens } = useContext(ItensContext)

  return (
    <main className="bg-white dark:bg-gray600 h-screen">
      <Header />

      <section className="w-11/12 md:w-2/3 lg:max-w-[900px] m-auto">
        <div className="flex flex-1 justify-between gap-2 -mt-6">
          <Input />

          <button className="border-none flex items-center h-12 p-4 bg-greenDark hover:opacity-80 text-gray100 rounded-lg gap-2 font-bold text-xs transition dark:bg-bluedark dark:hover:bg-blue">
            Pesquisar
            <BiPlusCircle size={16} color="#f2f2f2" />
          </button>
        </div>

        <div className="mt-4">
          <TableComponent data={itens} />

          {itens.length <= 0 && (
            <p className="text-center py-2 text-gray-500 text-xl">
              Sem tarefas cadastrados
            </p>
          )}
        </div>
      </section>

      <ModeToggle />
    </main>
  )
}
