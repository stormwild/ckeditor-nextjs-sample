import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { Suspense } from 'react'
import HeadContent from '../components/head-content'
import styles from '../styles/Home.module.css'

const ClassicEditor = dynamic(() => import('../components/ClassicEditor'), {
  ssr: false,
  loading: () => <p>Loading CKEditor...</p>,
})

const ClassicEditorPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <HeadContent />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.editor}>
            <h2>Classic Editor</h2>
            <p>CKEditor Sample</p>
            <ClassicEditor />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default ClassicEditorPage
