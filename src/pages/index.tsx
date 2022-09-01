import Head from 'next/head'

import { useRouter } from 'next/router'

import styles from 'styles/home.module.scss'


const Home = () => {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Next</title>
      </Head>
    <h1>tela inicial</h1>
    <button type="button" onClick={() => router.push('/login')}>
      login
    </button>
    </div>

  )
}

export default Home