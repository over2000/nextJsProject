import 'styles/globals.scss'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { getCookie, setCookies } from 'cookies-next'
import { useState } from 'react'

export default function App(props) {
  const { Component, pageProps } = props

  const [colorScheme, setColorScheme] = useState(props.colorScheme)

  const toggleColorScheme = value => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30
    })
  }

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = ({ ctx }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'n '
})
