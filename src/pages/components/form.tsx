import { CgSpinner } from 'react-icons/cg'
import { useForm } from 'react-hook-form'
import { InputWithLabel } from '@/components/form/inputWithLabel'
import { SelectWithLabel } from '@/components/form/selectWithLabel'
import { DatePickerWithLabel } from '@/components/form/datePicker'

interface PropsForm {
  onSubmit: () => void,
  data: object,
  handleInputChange: () => void,
  errors: object,
  isLoading: boolean,
  closeModal: () => void,
  editMode: boolean,
  viewMode: boolean,
}

export default function Form({
  onSubmit,
  data,
  handleInputChange,
  isLoading,
  closeModal,
  editMode,
  viewMode,
}: PropsForm) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      nome: '',
      descricao: '',
      data: '',
      prioridade: ''
    }
  })

  const onSubmitData = data => console.log("Dados:", data)

  const dataPriority = [
    {id: 'alta', name: 'Alta'},
    {id: 'media', name: 'Média'},
    {id: 'baixa', name: 'Baixa'},
  ]

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div className="pt-2 space-y-4">
        <InputWithLabel
          id="nome"
          label="Nome *"
          placeholder="Digite um nome"
          type="text"
          register={register}
          errors={errors}
        />

        <InputWithLabel
          id="descricao"
          label="Descrição *"
          placeholder="Digite a descrição"
          type="text"
          register={register}
          errors={errors}
        />

        <DatePickerWithLabel 
          label="Data *"
          id="data"
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />

        <SelectWithLabel 
          id="prioridade"
          label="Prioridade *"
          register={register}
          placeholder="Selecione a prioridade"
          errors={errors}
          data={dataPriority}
          setValue={setValue}
          watch={watch}
        />

        {!viewMode && (
          <p className="text-xs font-medium text-gray-700 pb-2">
            Os campos marcados com * são obrigatórios.
          </p>
        )}
      </div>

      <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
        {!viewMode && (
          <button
            className="inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80 sm:ml-3 sm:w-auto"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-1">
                <CgSpinner size={18} className="animate-spin" />
                <span>Salvando...</span>
              </div>
            ) : (
              <span>Salvar</span>
            )}
          </button>
        )}
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={closeModal}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
