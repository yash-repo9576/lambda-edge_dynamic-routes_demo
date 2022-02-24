import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Changes to trigger CodePipeline
        </h1>
        <Link href="/secret">
          <a>Secret</a>
        </Link>

        <Link href="/secret_item/1">
          <a>Super Secret Item 1</a>
        </Link>
      </main>
    </div>
  )
}
