import { useContext } from 'react'
import { ListContext } from '../contexts/ListProvider'

export function useListContext() {
  const context = useContext(ListContext)
  if (context === undefined) {
    throw new Error('useListContext must be used within a ListProvider')
  }
  return context
}
