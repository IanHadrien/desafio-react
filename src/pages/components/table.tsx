import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CreateItem } from './CreateModal'
import { ItensContext, ItensTypes } from '@/contexts/ItensContext'
import { EditItem } from './EditModal'
import { DeleteItem } from './DeleteModal'
import { ArrowUpDown } from 'lucide-react'
import { useContext } from 'react'

interface TableComponentProps {
  data: ItensTypes[]
}

const dataPriority = [
  { id: 'alta', name: 'Alta' },
  { id: 'media', name: 'Média' },
  { id: 'baixa', name: 'Baixa' },
]

export function TableComponent({ data }: TableComponentProps) {
  const { sortItemsByDate, sortByPriority } = useContext(ItensContext)

  const getPriorityName = (priorityId: string) => {
    const priority = dataPriority.find(({ id }) => id === priorityId)
    return priority?.name || 'Desconhecida'
  }

  const getPriorityColor = (priorityId: string) => {
    switch (priorityId) {
      case 'alta':
        return 'bg-red-500'
      case 'media':
        return 'bg-yellow-500'
      case 'baixa':
        return 'bg-green-500'
      default:
        return 'bg-gray-300'
    }
  }

  return (
    <div className="space-y-2">
      <CreateItem />

      <Table className="border-y shadow-xl">
        <TableHeader className="rounded-full ">
          <TableRow>
            <TableHead className="">Nome</TableHead>
            <TableHead className="">Descrição</TableHead>
            <TableHead className="w-[150px]">
              <button
                className="flex items-center text-base"
                onClick={sortItemsByDate}
              >
                Data
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </button>
            </TableHead>
            <TableHead className="w-[150px]">
              <button
                className="flex items-center text-base"
                onClick={sortByPriority}
              >
                Prioridade
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </button>
            </TableHead>
            <TableHead className="text-right w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="border-gray-400 shadow">
          {data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {getPriorityName(item.priority)}
                  <div
                    className={`ml-1 w-3 h-3 rounded-full ${getPriorityColor(
                      item.priority
                    )}`}
                  />
                </div>
              </TableCell>
              <TableCell className="flex items-end justify-end space-x-1">
                <EditItem viewMode={true} data={item} />

                <EditItem viewMode={false} data={item} />

                <DeleteItem dataId={item.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
