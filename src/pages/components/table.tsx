import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CreateItem } from './createModal'

interface dataTypes {
  id: string
  nome: string
  descricao: string
  data: string
  prioridade: string
}

export function TableComponent({ data }) {
  return (
    <div className="space-y-2">
      <CreateItem />

      <Table className="border shadow-xl">
        <TableHeader className="rounded-full ">
          <TableRow className="rounded-full">
            <TableHead className="">Id</TableHead>
            <TableHead className="">Nome</TableHead>
            <TableHead className="">Descrição</TableHead>
            <TableHead className="">Data</TableHead>
            <TableHead className="">Prioridade</TableHead>
            <TableHead className="text-right "></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-gray-400 shadow">
          {data?.map((item: dataTypes) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.descricao}</TableCell>
              <TableCell>{item.data}</TableCell>
              <TableCell>{item.prioridade}</TableCell>
              <TableCell className="flex text-right space-x-1">
                <span>view</span>
                <span>Edit</span>
                <span>Delete</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
