import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useContext, useState } from 'react'
import Form from './form'
import { ItensContext, ItensTypes } from '@/contexts/ItensContext'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Eye, Pencil } from 'lucide-react'
import Tooltip from '@/components/Tooltip'

interface EditItemProps {
  viewMode: boolean
  data: ItensTypes
}

export function EditItem({ viewMode, data }: EditItemProps) {
  const { updateItemsContext } = useContext(ItensContext)
  const { toast } = useToast()

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const onSubmitData = (editData: ItensTypes) => {
    setIsLoading(true)

    setTimeout(() => {
      updateItemsContext(editData)

      toast({
        title: 'Sucesso!',
        description: 'Tarefa editada com sucesso',
        icon: 'success',
      })

      setIsLoading(false)
      setOpen(false)
    }, 1000); // 1 second
  }

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <Button
          id={viewMode ? 'view-button' : 'edit-button'}
          variant="outline"
          size="icon"
          onClick={handleOpen}
        >
          {viewMode ? (
            <Eye className="h-4 w-4 " />
          ) : (
            <Pencil className="h-4 w-4" />
          )}
        </Button>
      </DialogTrigger>
      <Tooltip
        text={viewMode ? 'Visualizar' : 'Editar'}
        anchorSelect={viewMode ? '#view-button' : '#edit-button'}
      />

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>
            {viewMode ? 'Visualizar tarefa' : 'Editar tarefa'}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form 
          onSubmitData={onSubmitData}
          data={data}
          closeModal={handleOpen}
          isLoading={isLoading}
          viewMode={viewMode}
        />
      </DialogContent>
    </Dialog>
  )
}
