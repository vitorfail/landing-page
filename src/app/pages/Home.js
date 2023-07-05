'use client';
import styles from '../page.module.css'
import Header from '../components/Header/Header'
import Videos from '../components/Videos/Videos'
import Plano from '../components/Plano/Plano'
import Rodape from '../components/Rodape/Rodape'
import Popup from '../components/Popup/Popup'
import { useState } from 'react'
export default function Home() {
  const [popup, setpopup] = useState(false)
  return (
    <main className={styles.home}>
      <Popup estado={popup} abrir_fechar={setpopup}></Popup>
      <Header></Header>
      <Videos estado={popup} abrir_fechar={setpopup}></Videos>
      <Plano></Plano>
      <Rodape></Rodape>
    </main>
  )
}
