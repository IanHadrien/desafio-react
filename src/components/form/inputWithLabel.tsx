import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface InputWithLabelProps {
  type: string
  id: string
  label: string
  placeholder: string
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  disabled: boolean
}

export function InputWithLabel({
  type,
  id,
  label,
  placeholder,
  register,
  errors,
  disabled
}: InputWithLabelProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        className={`border ${errors[id] && 'border-red-500'}`}
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: 'Este campo é obrigatório',
          minLength: 3,
          maxLength: 55,
        })}
        disabled={disabled}
      />
      {errors[id] && (
        <p className="text-red-600 text-xs">{String(errors[id]?.message)}</p>
      )}
    </div>
  )
}
