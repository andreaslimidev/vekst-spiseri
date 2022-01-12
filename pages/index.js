import Head from 'next/head'
import Image from 'next/image'
import logo from "../public/logo.svg"
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="vekst-logo" />
      </div>
      <h1>Nettsiden vår kommer snart</h1>
      <p>I mellomtiden kan du kontakte oss på <a href="mailto:post@vekstspiseri.no">post@vekstspiseri.no</a></p>
    </div>
  )
}
