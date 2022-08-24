import 'styles/globals.scss'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { useState } from 'react'

function MyApp(props) {
  const { Component, pageProps } = props
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useState(preferredColorScheme)

  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

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

export default MyApp
