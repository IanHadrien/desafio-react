import { CgSpinner } from 'react-icons/cg'
import { useForm } from 'react-hook-form'
import { InputWithLabel } from '@/components/form/inputWithLabel'
import { SelectWithLabel } from '@/components/form/selectWithLabel'
import { ItensTypes } from '@/contexts/ItensContext'

interface PropsForm {
  onSubmitData: (data: ItensTypes) => void,
  data?: ItensTypes,
  isLoading: boolean,
  closeModal: () => void,
  viewMode: boolean,
}

export default function Form({
  onSubmitData,
  data,
  isLoading,
  closeModal,
  viewMode,
}: PropsForm) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      id: data?.id || '',
      name: data?.name || '',
      description: data?.description || '',
      priority: data?.priority || '',
      created_at: data?.created_at || '',
    }
  })

  const dataPriority = [
    {id: 'alta', name: 'Alta'},
    {id: 'media', name: 'Média'},
    {id: 'baixa', name: 'Baixa'},
  ]

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div className="pt-2 space-y-4">
        <InputWithLabel
          id="name"
          label="Nome *"
          placeholder="Digite um nome"
          type="text"
          register={register}
          errors={errors}
          disabled={viewMode}
        />

        <InputWithLabel
          id="description"
          label="Descrição *"
          placeholder="Digite a descrição"
          type="text"
          register={register}
          errors={errors}
          disabled={viewMode}
        />

        <SelectWithLabel 
          id="priority"
          label="Prioridade *"
          register={register}
          placeholder="Selecione a prioridade"
          errors={errors}
          data={dataPriority}
          setValue={setValue}
          watch={watch}
          disabled={viewMode}
        />

        {!viewMode && (
          <p className="text-xs font-medium text-gray-700 pb-2">
            Os campos marcados com * são obrigatórios.
          </p>
        )}
      </div>

      <div className="bg-gray-50 dark:bg-dark py-3 sm:flex sm:flex-row-reverse">
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
