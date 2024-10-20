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
import { ptBR } from 'date-fns/locale'

interface DatePickerWithLabelProps {
  setValue: (value: any) => void
  value: string
}

export function DatePickerWithLabel({
  setValue,
  value,
}: DatePickerWithLabelProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal h-12 bg-gray-100 dark:bg-gray500',
              !value && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? (
              format(new Date(value), 'PPP', { locale: ptBR })
            ) : (
              <span>Selecione uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
          <div className="rounded-md border">
            <Calendar
              mode="single"
              selected={value ? new Date(value) : undefined}
              onSelect={(date) => setValue(date)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
