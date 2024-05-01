import styles from "./Post.module.css"

export function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img src={props.imageSrc} />
        <div className={styles.authorInformations}>
          <strong>{props.author}</strong>
          <span>{props.authorRole}</span>
        </div>
      </div>
      <p>{props.text}</p>
    </div>
  )
}