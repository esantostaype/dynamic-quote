'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { ToastNotification } from '@/components'
import { CssVarsProvider } from '@mui/joy'
import { dynamicTheme } from '@/theme/dynamicTheme'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <ProgressBar color="var(--color-accent1)" options={{ showSpinner: false }}/>
    <CssVarsProvider theme={ dynamicTheme } defaultMode="dark">
      { children }
      <ToastNotification/>
    </CssVarsProvider>
    </>
  )
}