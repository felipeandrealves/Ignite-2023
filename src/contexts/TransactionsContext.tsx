import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransaction: (query?: string) => Promise<void>
  createTransaction: (transaction: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransaction = async (query?: string) => {
    const { data } = await api.get<Transaction[]>(`/transactions`, {
      params: { q: query, _sort: 'createdAt', _order: 'desc' },
    })

    setTransactions(data)
  }

  const createTransaction = async (transaction: CreateTransactionInput) => {
    const { data } = await api.post<Transaction>('/transactions', {
      ...transaction,
      createdAt: new Date().toISOString(),
    })

    setTransactions((state) => [...state, data])
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransaction, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionContext)
