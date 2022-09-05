import Head from 'next/head'
import debug from 'debug'
const logger = debug('app:pages:dashboard:modules:processors:index')
import { GetServerSideProps } from 'next'
import { useSession, signOut, getSession } from 'next-auth/react'

import styles from './styles.module.scss'

const Header = () => {
  const { data } = useSession()
  let dateTime = new Date().getHours()
  let greeting = 'Boa noite'

  logger(greeting)

  dateTime >= 6 && dateTime <= 12 ? (greeting = 'Bom dia') : greeting
  dateTime >= 13 && dateTime <= 18 ? (greeting = 'Boa tarde') : greeting

  return (
    <header className={styles.container}>
      <Head>
        <title>Next</title>
      </Head>

      <strong>
        {greeting} {data?.user?.name}
      </strong>

      <button type="button" onClick={() => signOut()}>
        LogOut
      </button>
    </header>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session != null) {
    return { props: {} }
  }

  return {
    props: {},
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}

export default Header
