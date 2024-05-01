import { Header } from "./components/Header/Header.jsx"
import { Post } from "./components/Post/Post.jsx"
import { Sidebar } from "./components/Sidebar/Sidebar.jsx"
import lucasIcon from "./components/Post/lucasaguiar-pp.png"
import kauIcon from "./components/Post/kaucartelli-pp.png"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas"
            authorRole="Backend Developer"
            text="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
            imageSrc={lucasIcon}
          />
          <Post
            author="Kauany"
            authorRole="Frontend Developer"
            text="Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 "
            imageSrc={kauIcon}
          />
          <Post
            author="Lucas"
            authorRole="Backend Developer"
            text="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
            imageSrc={lucasIcon}
          />
          <Post
            author="Kauany"
            authorRole="Frontend Developer"
            text="Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 "
            imageSrc={kauIcon}
          />
        </main>
      </div>
    </div>
  )
}