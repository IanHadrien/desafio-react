import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ModeToggle from '../src/components/mode-toggle/ModeToggle'
import { useTheme } from '../src/contexts/ThemeProvider'
import { beforeEach, describe, expect, test, vi } from 'vitest'

vi.mock('@/contexts/ThemeProvider', () => ({
  useTheme: vi.fn(),
}))

describe('ModeToggle Component', () => {
  const setThemeMock = vi.fn()

  beforeEach(() => {
    ;(useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    })
  })

  test('Should toggle between light and dark theme correctly', () => {
    const { getByTestId } = render(<ModeToggle />)

    const checkbox = getByTestId('checkbox') as HTMLInputElement

    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)

    expect(setThemeMock).toHaveBeenCalledWith('dark')
  })
})
