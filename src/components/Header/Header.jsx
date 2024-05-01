import styles from "./Header.module.css"
import freeIcon from "../../assets/ignite-logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={freeIcon} alt="Ignite Logo" />
    </header>
  )
}
