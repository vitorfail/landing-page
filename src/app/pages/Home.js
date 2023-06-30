import styles from '../page.module.css'
import Header from '../components/Header/Header'
import Videos from '../components/Videos/Videos'
export default function Home() {
  return (
    <main className={styles.home}>
      <Header></Header>
      <Videos></Videos>
    </main>
  )
}
