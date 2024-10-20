import Header from '../components/Header'
import { TableComponent } from '@/pages/components/Table'
import Input from '@/components/form/input'
import { useContext, useState } from 'react'
import { ItensContext } from '@/contexts/ItensContext'
import { Button } from '@/components/ui/button'
import { Search, XCircleIcon } from 'lucide-react'
import Tooltip from '@/components/Tooltip'
import Pagination from '@/components/Pagination'
import { SelectWithLabel } from './components/Select'

const dataPriority = [
  { id: 'alta', name: 'Alta' },
  { id: 'media', name: 'Média' },
  { id: 'baixa', name: 'Baixa' },
]

export default function Index() {
  const {
    itens,
    searchItemsByName,
    clearSearchItems,
    getPaginatedItems,
    totalPages,
  } = useContext(ItensContext)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const paginatedItems = getPaginatedItems(currentPage, itemsPerPage)

  const [searchQuery, setSearchQuery] = useState({
    name: '',
    priority: '',
  })

  const onSubmitSearch = () => {
    searchItemsByName(searchQuery)
    setCurrentPage(1)
  }

  const onClearSearch = () => {
    clearSearchItems()
    setSearchQuery({
      name: '',
      priority: '',
    })
  }

  return (
    <main className="bg-white dark:bg-gray600 h-full transition-colors">
      <Header />

      <section className="w-11/12 md:w-2/3 lg:max-w-[900px] m-auto">
        <div className="block space-y-2 sm-500:space-y-0 sm-500:flex sm-500:justify-between gap-2 -mt-6">
          <Input
            handleInputChange={(value: string) =>
              setSearchQuery({ ...searchQuery, name: value })
            }
            value={searchQuery.name}
          />

          <SelectWithLabel 
            placeholder="Prioridade"
            data={dataPriority}
            setValue={(value) => setSearchQuery({ ...searchQuery, priority: value})}
            value={searchQuery.priority}
          />

          <Button
            data-testid='search-button'
            id="search-button"
            className="bg-greenDark dark:bg-bluedark hover:bg-greenDarkHover dark:hover:opacity-80 h-12 transition w-full sm-500:w-min"
            onClick={onSubmitSearch}
          >
            <Search color="#f2f2f2" />
          </Button>
          <Tooltip text="Pesquisar" anchorSelect="#search-button" />

          <Button
            id="clear-button"
            className="bg-greenDark dark:bg-bluedark hover:bg-greenDarkHover dark:hover:opacity-80 h-12 transition w-full sm-500:w-min"
            onClick={onClearSearch}
          >
            <XCircleIcon color="#f2f2f2" className="w-5 h-5" />
          </Button>
          <Tooltip text="Limpar pesquisa" anchorSelect="#clear-button" />
        </div>

        <div className="mt-4">
          <TableComponent data={paginatedItems} />

          {itens.length <= 0 && (
            <p className="text-center py-2 text-gray-500 text-xl">
              Sem tarefas cadastrados
            </p>
          )}

          {itens.length > 0 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              page={currentPage}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          )}
        </div>
      </section>
    </main>
  )
}
