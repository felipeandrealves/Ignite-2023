import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { defaultTheme } from '../styles/theme/default'
import { darkTheme } from '../styles/theme/dark'

interface ThemeContextData {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeContextData['theme']>('light')

  const toggleTheme = () => {
    setTheme((state) => (state === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const theme = localStorage.getItem(
      '@ignite-coffee-delivery:theme-state-1.0.0',
    )

    if (theme) {
      setTheme(JSON.parse(theme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:theme-state-1.0.0',
      JSON.stringify(theme),
    )
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentThemeProvider
        theme={theme === 'light' ? defaultTheme : darkTheme}
      >
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
