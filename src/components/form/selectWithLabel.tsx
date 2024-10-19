import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect } from 'react'
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'

interface SelectWithLabelProps {
  label: string
  id: string
  data: SelectWithLabelDataProps[]
  placeholder: string
  register: UseFormRegister<any>
  setValue: UseFormSetValue<any>
  watch: UseFormWatch<any>
  errors: FieldErrors<any>
  disabled: boolean
}

interface SelectWithLabelDataProps {
  id: string
  name: string
}

export function SelectWithLabel({
  label,
  id,
  placeholder,
  data,
  register,
  errors,
  watch,
  setValue,
  disabled
}: SelectWithLabelProps) {
  const selectedValue = watch(id) // Watching the value of the select field

  useEffect(() => {
    register(id, {
      required: 'Este campo é obrigatório',
    })
  }, [register, id])

  return (
    <div className="grid w-full items-center gap-1.5 mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Select
        onValueChange={(value) => setValue(id, value)}
        disabled={disabled}
      >
        <SelectTrigger className={`border ${errors[id] && 'border-red-500'}`}>
          <SelectValue placeholder={selectedValue || placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      {errors[id] && (
        <p className="text-red-600 text-xs">{String(errors[id]?.message)}</p>
      )}
    </div>
  )
}
