import { Post } from "../Post/Post"
import styles from "./Page.module.css"
import kauPpImage from "../Post/kaucartelli-pp.png";
import lucasPpImage from "../Post/lucasaguiar-pp.png";


export function Page() {
  return (
    <div className={styles.page}>
      <Post
        imageSrc={lucasPpImage}
        author="Lucas Aguiar"
        authorRole="Backend Developer"
        text="Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      />
      <Post
        imageSrc={kauPpImage}
        author="Kauany Cartelli"
        authorRole="Frontend Developer"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, in eaque fugit quidem dignissimos enim sint repudiandae quas distinctio impedit ipsam unde et ab atque accusamus? Sit laudantium repudiandae unde."
      />
      <Post
        imageSrc={lucasPpImage}
        author="Lucas Aguiar"
        authorRole="Backend Developer"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, in eaque fugit quidem dignissimos enim sint repudiandae quas distinctio impedit ipsam unde et ab atque accusamus? Sit laudantium repudiandae unde."
      />
      <Post
        imageSrc={kauPpImage}
        author="Kauany Cartelli"
        authorRole="Frontend Developer"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, in eaque fugit quidem dignissimos enim sint repudiandae quas distinctio impedit ipsam unde et ab atque accusamus? Sit laudantium repudiandae unde."
      />
    </div>
  )
}