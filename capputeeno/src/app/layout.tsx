'use client'

import { ThemeProvider } from 'styled-components'
import { Header } from '@/components/Header'
import { StyledComponentsRegistry } from '@/libs'
import { GlobalStyles } from '@/styles/global'
import theme from '@/styles/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
