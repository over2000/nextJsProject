import Head from 'next/head'
import { GetStaticProps } from 'next'

import svg from 'public/svg1.svg'

import styles from 'styles/home.module.scss'

type HomeProps = {
  title: string
}

export default function Home({ title }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          
          
      </title>
      </Head>
      <h1>{svg}
      logo
    </h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const title = 'O começo de algo...'
  return { props: { title } }
}
