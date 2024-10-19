import { createContext, ReactNode, useState } from 'react'

export interface ItensTypes {
  id: string
  name: string
  description: string
  created_at: string
  priority: string
}

interface ItensContextType {
  itens: ItensTypes[]
  saveItemsContext: (newItens: ItensTypes) => void
}

export const ItensContext = createContext({} as ItensContextType)

interface ItensContextProviderProps {
  children: ReactNode
}

export function ItensContextProvider({ 
  children
}: ItensContextProviderProps) {
  const [itens, setItens] = useState(
    [
      {
        id: '1',
        name: 'Teste',
        description: 'teste',
        created_at: '28/90/2024',
        priority: 'alta'
      },
      {
        id: '2',
        name: 'Teste 2',
        description: 'teste 2',
        created_at: '28/90/2024',
        priority: 'baixa'
      },
    ]
  )

  const saveItemsContext = (newItens: ItensTypes) => {
    setItens([...itens, newItens])
    console.log('saveItemsContext', newItens)
  }

  return (
    <ItensContext.Provider
      value={{
        itens,
        saveItemsContext        
      }}
    >
      {children}
    </ItensContext.Provider>
  )
}
