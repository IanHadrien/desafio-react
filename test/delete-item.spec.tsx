import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { DeleteItem } from '../src/pages/components/DeleteModal'
import { ItensContext, ItensTypes } from '../src/contexts/ItensContext'

let mockItems: ItensTypes[] = [
  {
    id: '12345',
    name: 'Tarefa Teste',
    created_at: '01/01/2024',
    description: 'Descrição Teste',
    priority: 'Alta',
  },
]

const deleteItemContextMock = vi.fn((id: string) => {
  mockItems = mockItems.filter((item) => item.id !== id)
})

const mockContextValue = {
  itens: mockItems,
  deleteItemContext: deleteItemContextMock,
  saveItemsContext: vi.fn(),
  clearSearchItems: vi.fn(),
  getPaginatedItems: vi.fn().mockReturnValue([]),
  totalPages: 1,
  updateItemsContext: vi.fn(),
  sortItemsByDate: vi.fn(),
  sortByPriority: vi.fn(),
  searchItemsByName: vi.fn(),
}

describe('Delete Item', () => {
  beforeEach(() => {
    mockItems = [
      {
        id: '12345',
        name: 'Tarefa Teste',
        created_at: '01/01/2024',
        description: 'Descrição Teste',
        priority: 'Alta',
      },
    ]
  })

  test('should delete item correctly from context', async () => {
    const { getByTestId } = render(
      <ItensContext.Provider value={mockContextValue}>
        <DeleteItem dataId="12345" />
      </ItensContext.Provider>
    )

    fireEvent.click(getByTestId('delete-button-modal'))

    await waitFor(() => {
      deleteItemContextMock('12345')
    })

    expect(mockItems).toEqual([])

    expect(deleteItemContextMock).toHaveBeenCalledWith('12345')
  })
})
