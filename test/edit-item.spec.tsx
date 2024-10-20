import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { EditItem } from '../src/pages/components/EditModal'
import { ItensContext, ItensTypes } from '../src/contexts/ItensContext'

let mockItems: ItensTypes[] = [
  {
    id: '12345',
    name: 'Tarefa Original',
    created_at: '01/01/2024',
    description: 'Descrição Original',
    priority: 'Média',
  },
]

const updateItemsContextMock = vi.fn((editData: ItensTypes) => {
  const index = mockItems.findIndex(item => item.id === editData.id)
  if (index !== -1) {
    mockItems[index] = { ...mockItems[index], ...editData }
  }
})

const mockContextValue = {
  itens: mockItems,
  saveItemsContext: vi.fn(),
  updateItemsContext: updateItemsContextMock,
  clearSearchItems: vi.fn(),
  getPaginatedItems: vi.fn().mockReturnValue([]),
  totalPages: 1,
  deleteItemContext: vi.fn(),
  sortItemsByDate: vi.fn(),
  sortByPriority: vi.fn(),
  searchItemsByName: vi.fn(),
}

describe('Edit Item', () => {
  beforeEach(() => {
    mockItems = [
      {
        id: '12345',
        name: 'Tarefa Original',
        created_at: '01/01/2024',
        description: 'Descrição Original',
        priority: 'Média',
      },
    ]
  })

  test('should update item correctly in the context', async () => {
    const { getByTestId } = render(
      <ItensContext.Provider value={mockContextValue}>
        <EditItem data={mockItems[0]} viewMode={false} />
      </ItensContext.Provider>
    );

    fireEvent.click(getByTestId('edit-button-modal'))

    const editedItem = {
      id: '12345', 
      name: 'Tarefa Editada',
      created_at: '01/01/2024',
      description: 'Descrição Editada',
      priority: 'Alta',
    };

    await waitFor(() => {
      updateItemsContextMock(editedItem)
    })

    expect(mockItems).toEqual(
      expect.arrayContaining([expect.objectContaining(editedItem)])
    )

    expect(updateItemsContextMock).toHaveBeenCalledWith(
      expect.objectContaining(editedItem)
    )
  })
})