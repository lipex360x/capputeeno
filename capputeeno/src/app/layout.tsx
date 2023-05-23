'use client'

import { Saira } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { Header } from '@/components/Header'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles } from '@/styles/global'
import theme from '@/styles/theme'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
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
