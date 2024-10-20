import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useContext, useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import Form from './Form'
import { ItensContext, ItensTypes } from '@/contexts/ItensContext'
import { format } from 'date-fns/format'
import { ptBR } from 'date-fns/locale'
import { useToast } from '@/hooks/use-toast'

export function CreateItem() {
  const { saveItemsContext } = useContext(ItensContext)
  const { toast } = useToast()

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
  }

  const onSubmitData = (data: ItensTypes) => {
    setIsLoading(true)

    const randomId = generateRandomId()

    setTimeout(() => {
      saveItemsContext({
        ...data,
        id: randomId,
        created_at: format(new Date(), 'dd/MM/yyyy', { locale: ptBR }),
      })

      toast({
        title: 'Sucesso!',
        description: 'Tarefa criada com sucesso',
        icon: 'success',
      })

      setIsLoading(false)
      setOpen(false)
    }, 1000); // 1 second
  }

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <button className="border-none flex items-center px-4 py-2 bg-greenDark hover:opacity-80 text-gray100 rounded-lg gap-2 font-bold text-sm transition dark:bg-bluedark dark:hover:bg-blue">
          Criar
          <BiPlusCircle size={18} color="#f2f2f2" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Adicionar tarefa</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form 
          onSubmitData={onSubmitData}
          closeModal={handleOpen}
          isLoading={isLoading}
          viewMode={false}
        />
      </DialogContent>
    </Dialog>
  )
}
