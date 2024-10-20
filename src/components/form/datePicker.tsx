import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'

interface DatePickerWithLabelProps {
  id: string
  label: string
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  disabled: boolean
  setValue: UseFormSetValue<any>
  watch: UseFormWatch<any>
}

export function DatePickerWithLabel({
  label,
  id,
  register,
  setValue,
  watch,
  errors,
  disabled,
}: DatePickerWithLabelProps) {
  const selectedDate = watch(id)

  React.useEffect(() => {
    register(id, { required: 'A data é obrigatória' })
  }, [register, id])

  return (
    <div className="flex flex-col mb-4 gap-1.5">
      <Label htmlFor={id}>{label}</Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !selectedDate && 'text-muted-foreground',
              errors[id] && 'border-red-500'
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? (
              selectedDate
            ) : (
              <span>Selecione a data de criação</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
          <div className="rounded-md border">
            <Calendar
              mode="single"
              selected={selectedDate ? new Date(selectedDate) : undefined}
              onSelect={(date) => setValue(id, format(new Date(date), 'dd/MM/yyyy'))}
            />
          </div>
        </PopoverContent>
      </Popover>

      {errors[id] && (
        <p className="text-red-600 text-xs">{String(errors[id]?.message)}</p>
      )}
    </div>
  )
}
