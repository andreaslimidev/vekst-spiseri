import '../styles/globals.scss'
import styles from "../styles/App.module.scss"

function MyApp({ Component, pageProps }) {
  return (<div className={styles.wrapper}>
    <div className={styles.container}>
      <Component {...pageProps} />
    </div>
  </div>)
}

export default MyApp
