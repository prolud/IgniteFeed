import { Header } from "./components/Header/Header.jsx"
import { Post } from "./components/Post/Post.jsx"
import lucasIcon from "./components/Post/lucasaguiar-pp.png"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
            author="Lucas"
            authorRole="Backend Developer"
            text="Olá, Sou novo na rede!"
            imageSrc={lucasIcon}
          />
        </main>
      </div>
    </div>
  )
}