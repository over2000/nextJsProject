import { Provider } from 'next-auth/client'
import Navbar from '../components/NavBar/Navbar'
import '../styles/globals.css'
import '../components/NavBar/Navbar.css'
import { AppWrapper } from '../context/state'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AppWrapper>
        <Navbar />
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  )
}

export default MyApp
