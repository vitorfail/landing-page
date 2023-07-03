import styles from '../page.module.css'
import Header from '../components/Header/Header'
import Videos from '../components/Videos/Videos'
import Plano from '../components/Plano/Plano'
import Rodape from '../components/Rodape/Rodape'
export default function Home() {
  return (
    <main className={styles.home}>
      <Header></Header>
      <Videos></Videos>
      <Plano></Plano>
      <Rodape></Rodape>
    </main>
  )
}
