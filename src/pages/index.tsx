import Head from 'next/head'
import styles from 'styles/home.module.scss'
import { ColorModeSwitcher } from '../components/coloSwitcher'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next</title>
      </Head>
      <ColorModeSwitcher />
    </div>
  )
}
