import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useSession, signOut, getSession } from 'next-auth/react'

import styles from 'styles/home.module.scss'


const Dashboard = () => {

  const {data} = useSession()


  return (
    <div className={styles.container}>
      <Head>
        <title>Next</title>
      </Head>
    <header className={styles.header}>
      <div className={styles.user}>
      <strong> Bem vindo {data?.user?.name}</strong>
    
    </div>
    <button type="button" onClick={() => signOut()}>

      LogOut
    </button>
    </header>
    </div>

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

export default Dashboard