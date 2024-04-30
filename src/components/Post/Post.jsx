import styles from "./Post.module.css"

export function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img src={props.imageSrc} />
        <div className={styles.authorInformations}>
          <h5>{props.author}</h5>
          <h6>{props.authorRole}</h6>
        </div>
      </div>
      <p>{props.text}</p>
    </div>
  )
}