import styles from "./Header.module.css"
import freeIcon from "./free-icon.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={freeIcon} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
