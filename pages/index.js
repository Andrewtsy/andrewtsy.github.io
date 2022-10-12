import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andrew Tao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! <br/> My name is Andrew <br/>
        </h1> &nbsp;&nbsp;

        <span>
          <Image src="ProfHeadshot.png" alt="Headshot" width={280} height={420} />
        </span>

        <p className={styles.description}>
          Find me at the following locations <br/>
          <a className={styles.img} href="https://github.com/Andrewtsy">
            <Image src="Github.png" width={75} height={75}/>
          </a>
          <a className={styles.img} href="https://www.linkedin.com/in/andrew-tao-5a9729213/">
            <Image src="LinkedIn.png" className={styles.logo} width={75} height={75}/>
          </a>
          <a className={styles.img} href="https://www.instagram.com/andrew.tao1/">
            <Image src="Instagram.png" className={styles.logo} width={75} height={75}/>
          </a>
        </p>
      </main>
    </div>
  )
}
