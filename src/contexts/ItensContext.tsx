import { createContext, ReactNode, useEffect, useState } from 'react'

export interface ItensTypes {
  id: string
  name: string
  description: string
  created_at: string
  priority: string
}

interface SearchItemProps {
  name: string
  priority: string
}

interface ItensContextType {
  itens: ItensTypes[]
  saveItemsContext: (newItens: ItensTypes) => void
  updateItemsContext: (editItens: ItensTypes) => void
  deleteItemContext: (idIten: string) => void
  sortItemsByDate: () => void
  sortByPriority: () => void
  searchItemsByName: (searchItens: SearchItemProps) => void
  clearSearchItems: () => void
  getPaginatedItems: (page: number, itemsPerPage: number) => ItensTypes[]
  totalPages: number
}

export const ItensContext = createContext({} as ItensContextType)

interface ItensContextProviderProps {
  children: ReactNode
}

const priorityOrder: Record<string, number> = {
  alta: 1,
  media: 2,
  baixa: 3,
}

export function ItensContextProvider({ children }: ItensContextProviderProps) {
  const [itens, setItens] = useState<ItensTypes[]>(() => {
    const storedItems = localStorage.getItem('itens')
    return storedItems ? JSON.parse(storedItems) : []
  })

  const [originalItems, setOriginalItems] = useState<ItensTypes[]>(() => {
    const storedItems = localStorage.getItem('itens')
    return storedItems ? JSON.parse(storedItems) : []
  })

  const [isAscending, setIsAscending] = useState(true)
  const [isAscendingPriority, setIsAscendingPriority] = useState(true)

  const itemsPerPage = 10

  useEffect(() => {
    localStorage.setItem('itens', JSON.stringify(originalItems))
  }, [originalItems])

  const saveItemsContext = (newItens: ItensTypes) => {
    const saveItems = [...originalItems, newItens]
    setOriginalItems(saveItems)
    setItens(saveItems)
  }

  const updateItemsContext = (editItens: ItensTypes) => {
    const updatedItems = originalItems.map((item) =>
      item.id === editItens.id ? { ...item, ...editItens } : item
    )
    setOriginalItems(updatedItems)
    setItens(updatedItems)
  }

  const deleteItemContext = (idIten: string) => {
    const updatedItems = originalItems.filter((item) => item.id !== idIten)
    setOriginalItems(updatedItems)
    setItens(updatedItems)
  }

  const sortItemsByDate = () => {
    const sortedItems = [...itens].sort((a, b) => {
      const dateA = new Date(a.created_at.split('/').reverse().join('-'))
      const dateB = new Date(b.created_at.split('/').reverse().join('-'))

      if (isAscending) {
        return dateA.getTime() - dateB.getTime()
      } else {
        return dateB.getTime() - dateA.getTime()
      }
    })

    setItens(sortedItems)
    setIsAscending(!isAscending)
  }

  const sortByPriority = () => {
    const sortedItems = [...itens].sort((a, b) => {
      const priorityA = priorityOrder[a.priority]
      const priorityB = priorityOrder[b.priority]

      if (isAscendingPriority) {
        return priorityA - priorityB
      } else {
        return priorityB - priorityA
      }
    })

    setItens(sortedItems)
    setIsAscendingPriority(!isAscendingPriority)
  }

  const searchItemsByName = (searchItens: SearchItemProps) => {
    const { name, priority } = searchItens

    const filteredItems = originalItems.filter((item) => {
      const matchesName = name
        ? item.name.toLowerCase().includes(name.toLowerCase())
        : true

      const matchesDate = priority
      ? item.priority === priority
      : true

      return matchesName && matchesDate
    })

    setItens(filteredItems)
  }

  const clearSearchItems = () => setItens(originalItems)

  const getPaginatedItems = (
    page: number,
    itemsPerPage: number
  ): ItensTypes[] => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return itens.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(itens.length / itemsPerPage)

  return (
    <ItensContext.Provider
      value={{
        itens,
        saveItemsContext,
        updateItemsContext,
        deleteItemContext,
        sortItemsByDate,
        sortByPriority,
        searchItemsByName,
        clearSearchItems,
        getPaginatedItems,
        totalPages,
      }}
    >
      {children}
    </ItensContext.Provider>
  )
}
