import { Header } from "./components/Header/Header.jsx"
import { Post } from "./components/Post/Post.jsx"
import { Sidebar } from "./components/Sidebar/Sidebar.jsx"

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
            imageSrc="https://github.com/prolud.png"
          />
        </main>
      </div>
    </div>
  )
}