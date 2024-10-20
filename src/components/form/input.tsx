export default function Input({ handleInputChange, value }) {
  return (
    <input
      type="text"
      placeholder="Pesquisa por nome da tarefa"
      className="px-4 border border-gray200 bg-gray-100 dark:border-gray700 rounded-lg dark:bg-gray500 h-12 w-full placeholder:text-gray300 focus:border-purpledark"
      onChange={(value) => handleInputChange(value.target.value)}
      value={value}
    />
  )
}
