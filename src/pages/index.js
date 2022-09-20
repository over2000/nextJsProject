import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  console.log({ session, loading })

  let dateTime = new Date().getHours()
  let greeting = 'Boa noite'

  dateTime >= 6 && dateTime <= 12 ? (greeting = 'Bom dia') : greeting
  dateTime >= 13 && dateTime <= 18 ? (greeting = 'Boa tarde') : greeting

  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {greeting} {session ? `${session.user.name}, ` : ''} Bem vindo.{' '}
        </h1>
      </main>

      <footer className={styles.footer}>
        <a>2022</a>
      </footer>
    </div>
  )
}
