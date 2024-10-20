import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Index from '../src/pages/Index'
import { ItensContext } from '../src/contexts/ItensContext'

const mockContextValue = {
  itens: [
    { id: '1', name: 'Item 1', description: 'Description 1', priority: 'baixa', created_at: '01/01/2023' },
    { id: '2', name: 'Item 2', description: 'Description 2', priority: 'baixa', created_at: '02/01/2023' },
    { id: '3', name: 'Item 3', description: 'Description 3', priority: 'baixa', created_at: '03/01/2023' },
    { id: '4', name: 'Item 4', description: 'Description 4', priority: 'baixa', created_at: '04/01/2023' },
  ],
  searchItemsByName: vi.fn(),
  clearSearchItems: vi.fn(),
  getPaginatedItems: vi.fn().mockReturnValue([]),
  totalPages: 2,            // Total pages
  saveItemsContext: vi.fn(),
  updateItemsContext: vi.fn(),
  deleteItemContext: vi.fn(),
  sortItemsByDate: vi.fn(),
  sortByPriority: vi.fn(),

}

describe('Index page - pagination', () => {
  test('Should return correctly paginated items to the current page', () => {
    mockContextValue.getPaginatedItems.mockImplementation((page, itemsPerPage) => {
      const startIndex = (page - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      return mockContextValue.itens.slice(startIndex, endIndex)
    })

    const { getByText, queryByText, getByTestId } = render(
      <ItensContext.Provider value={mockContextValue}>
        <Index />
      </ItensContext.Provider>
    )

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()

    expect(queryByText('Item 3')).not.toBeInTheDocument()
    expect(queryByText('Item 4')).not.toBeInTheDocument()

    const nextPageButton = getByTestId('next-page')
    fireEvent.click(nextPageButton)

    expect(getByText('Item 3')).toBeInTheDocument()
    expect(getByText('Item 4')).toBeInTheDocument()

    expect(queryByText('Item 1')).not.toBeInTheDocument()
    expect(queryByText('Item 2')).not.toBeInTheDocument()

    expect(mockContextValue.getPaginatedItems).toHaveBeenCalledWith(1, 2)
    expect(mockContextValue.getPaginatedItems).toHaveBeenCalledWith(2, 2)
  })
})
