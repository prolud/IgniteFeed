import styles from "./Comment.module.css"
import { Trash } from "phosphor-react"
import { HandsClapping } from "phosphor-react"

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <img src={props.authorIcon} />
            <div className={styles.commentFrame}>
                <div className={styles.commentContent}>
                    <header>
                        <strong>{props.authorName}</strong>
                        <Trash
                            className={styles.trashIcon}
                            size={"1.5rem"}
                        />
                    </header>
                    <p>
                        {props.commentText}
                    </p>
                </div>
                <div className={styles.likeButton}>
                    <div className={styles.clap}>
                        <HandsClapping />
                        <strong>Aplaudir • {props.likes}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}