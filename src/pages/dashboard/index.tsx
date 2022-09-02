import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useSession, signOut, getSession } from 'next-auth/react'

import styles from 'styles/home.module.scss'


const Dashboard = () => {

  const {data} = useSession()
  let dateTime = new Date().getHours()
  let greeting = 'Boa noite'

 
  if(dateTime >= 6 && dateTime <= 12){
   greeting = 'Bom dia'
  }else if(dateTime >= 13 && dateTime <= 18 ){
    greeting = 'Boa tarde'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next</title>
      </Head>
    <header className={styles.header}>
      <div className={styles.user}>
      <strong> 
         {greeting} {data?.user?.name}</strong>
    
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