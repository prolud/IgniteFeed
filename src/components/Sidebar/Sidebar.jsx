import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.coverImage}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=100&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Capa de perfil"
      />
      <div className={styles.profile}>
        <img src="https://github.com/prolud.png" alt="" />
        <div className={styles.profileNames}>
          <strong>Lucas Aguiar</strong>
          <span>Backend Developer</span>
        </div>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}