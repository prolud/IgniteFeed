import styles from "./Post.module.css"
import { Comment } from "../Comment/Comment"

export function Post(props) {
  return (
    <article className={styles.post}>
      <div className={styles.postContent}>
        <header className={styles.postHeader}>
          <div className={styles.authorProfile}>
            <img src={props.imageSrc} alt="Foto de perfil do usuário" />
            <div className={styles.authorNames}>
              <strong>{props.author}</strong>
              <span>{props.authorRole}</span>
            </div>
          </div>
          <time title="1 de maio às 8h" dateTime="2024-05-01 08:00:00">Publicado há 1h</time>
        </header>
        <p>{props.text}</p>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea type="text" placeholder="Comente aqui..." />
          <button>Publicar</button>
        </form>
      </div>
      <Comment
        authorIcon="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/425528047_1848686455603069_2559935554204755996_n.jpg?ccb=11-4&oh=01_Q5AaIHubWoCD7_ydlb5UgqTmeWejA-sZOVgocl2biirTQ3d2&oe=6661DF15&_nc_sid=e6ed6c&_nc_cat=106"
        authorName="Kauany Cartelli"
        commentText="Meu noivo é o melhor! eu te amooo ❤️"
        likes={3552}
      />
      <Comment
        authorIcon={props.imageSrc}
        authorName="Lucas Aguiar"
        commentText="Eu também te amo, meu amo! ❤️"
        likes={0}
      />
    </article>
  )
}