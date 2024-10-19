import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useContext, useState } from 'react'
import { ItensContext } from '@/contexts/ItensContext'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import Tooltip from '@/components/Tooltip'

interface DeleteItemProps {
  dataId: string
}

export function DeleteItem({ dataId }: DeleteItemProps) {
  const { deleteItemContext } = useContext(ItensContext)
  const { toast } = useToast()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const onDeleteIten = () => {
    deleteItemContext(dataId)

    toast({
      title: 'Sucesso!',
      description: 'Tarefa deletada com sucesso',
      icon: 'success',
    })

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <Button
          id="delete-button"
          variant="destructive"
          size="icon"
          onClick={handleOpen}
        >
          <Trash className="h-4 w-4 " />
        </Button>
      </DialogTrigger>
      <Tooltip text="Deletar" anchorSelect="#delete-button" />

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Excluir tarefa</DialogTitle>
          <DialogDescription />
          <p className='text-gray-500'>Tem certeza que deseja excluir esta tarefa?</p>
        </DialogHeader>

        <DialogFooter>
          <Button variant="secondary" onClick={handleOpen} className="mr-1">
            <span>Cancelar</span>
          </Button>
          <Button
            variant="destructive"
            type="submit"
            onClick={onDeleteIten}
          >
            <span>Excluir</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
