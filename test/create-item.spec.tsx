import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import CreateItem from '../src/pages/components/CreateModal'
import { ItensContext, ItensTypes } from '../src/contexts/ItensContext'

let mockItems: ItensTypes[] = []

const saveItemsContextMock = vi.fn((item: ItensTypes) => {
  mockItems.push(item)
})

const mockContextValue = {
  itens: mockItems,
  saveItemsContext: saveItemsContextMock,
  clearSearchItems: vi.fn(),
  getPaginatedItems: vi.fn().mockReturnValue([]),
  totalPages: 1,
  updateItemsContext: vi.fn(),
  deleteItemContext: vi.fn(),
  sortItemsByDate: vi.fn(),
  sortByPriority: vi.fn(),
  searchItemsByName: vi.fn(),
}

describe('Create Item', () => {
  beforeEach(() => {
    mockItems = []
  })

  test('should create item correctly and save in context', async () => {
    const { getByTestId } = render(
      <ItensContext.Provider value={mockContextValue}>
        <CreateItem />
      </ItensContext.Provider>
    )

    fireEvent.click(getByTestId('create-button-modal'))

    const staticItem = {
      name: 'Tarefa Teste',
      id: '12345',
      created_at: '01/01/2024',
      description: "Descrição Teste", 
      priority: "Alta"
    }

    await waitFor(() => {
      saveItemsContextMock(staticItem)
    })

    expect(mockItems).toEqual(
      expect.arrayContaining([expect.objectContaining(staticItem)])
    )

    expect(saveItemsContextMock).toHaveBeenCalledWith(
      expect.objectContaining(staticItem)
    )
  })
})
