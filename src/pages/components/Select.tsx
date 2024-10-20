import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SelectWithLabelProps {
  value: string
  data: SelectWithLabelDataProps[]
  placeholder: string
  setValue: (value: string) => void
}

interface SelectWithLabelDataProps {
  id: string
  name: string
}

export function SelectWithLabel({
  placeholder,
  data,
  value,
  setValue,
}: SelectWithLabelProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Select
        value={value}
        onValueChange={(value) => setValue(value)}
      >
        <SelectTrigger className={`border h-12 bg-gray-100 dark:bg-gray500 dark:border-gray700`}>
          <SelectValue placeholder={value || placeholder} />
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
    </div>
  )
}
