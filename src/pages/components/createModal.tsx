import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import Form from './form'

export function CreateItem() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>
        <button className="border-none flex items-center px-4 py-2 bg-bluedark text-gray100 rounded-lg gap-2 font-bold text-sm transition hover:bg-blue">
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
          closeModal={handleOpen}
          isLoading={isLoading}
          viewMode={false}
        />
      </DialogContent>
    </Dialog>
  )
}
