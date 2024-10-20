import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Index from '../src/pages/Index'
import { ItensContext } from '../src/contexts/ItensContext'

const mockContextValue = {
  itens: [],
  searchItemsByName: vi.fn(),
  clearSearchItems: vi.fn(),
  getPaginatedItems: vi.fn().mockReturnValue([]),
  totalPages: 1,
  saveItemsContext: vi.fn(),
  updateItemsContext: vi.fn(),
  deleteItemContext: vi.fn(),
  sortItemsByDate: vi.fn(),
  sortByPriority: vi.fn(),

}

describe('Index page', () => {
  test('Should be able to see the initial text on screen', () => {
    const { getByText, getByTestId } = render(
      <ItensContext.Provider value={mockContextValue}>
        <Index />
      </ItensContext.Provider>
    )

    const searchInput = getByTestId('search-input')
    expect(searchInput).toBeInTheDocument()

    const searchButton = getByTestId('search-button')
    expect(searchButton).toBeInTheDocument()

    const noItemsText = getByText('Sem tarefas cadastrados')
    expect(noItemsText).toBeInTheDocument()
  })
})
