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
    { id: '5', name: 'Item 5', description: 'Description 5', priority: 'baixa', created_at: '05/01/2023' },
    { id: '6', name: 'Item 6', description: 'Description 6', priority: 'baixa', created_at: '06/01/2023' },
    { id: '7', name: 'Item 7', description: 'Description 7', priority: 'baixa', created_at: '07/01/2023' },
    { id: '8', name: 'Item 8', description: 'Description 8', priority: 'baixa', created_at: '08/01/2023' },
    { id: '9', name: 'Item 9', description: 'Description 9', priority: 'baixa', created_at: '09/01/2023' },
    { id: '10', name: 'Item 10', description: 'Description 10', priority: 'baixa', created_at: '10/01/2023' },
    { id: '11', name: 'Item 11', description: 'Description 11', priority: 'baixa', created_at: '10/01/2023' },
  ],
  searchItemsByName: vi.fn(),
  clearSearchItems: vi.fn(),
  getPaginatedItems: vi.fn().mockReturnValue([]),
  totalPages: 10,            // Total pages
  saveItemsContext: vi.fn(),
  updateItemsContext: vi.fn(),
  deleteItemContext: vi.fn(),
  sortItemsByDate: vi.fn(),
  sortByPriority: vi.fn(),

}

describe('Index page - pagination', () => {
  test('Should return correctly paginated items to the current page', () => {

    mockContextValue.getPaginatedItems.mockImplementation((page, itemsPerPage) => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return mockContextValue.itens.slice(startIndex, endIndex);
    });

    const { getByText, queryByText, getByTestId } = render(
      <ItensContext.Provider value={mockContextValue}>
        <Index />
      </ItensContext.Provider>
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();

    expect(queryByText('Item 11')).not.toBeInTheDocument();

    const nextPageButton = getByTestId('next-page');
    fireEvent.click(nextPageButton);

    expect(getByText('Item 11')).toBeInTheDocument();
  });
})
