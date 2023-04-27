import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1601119479271-21ca92049c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/33573634?v=4"
        />
        <strong>Renan Steiger</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine  size={20}/>
          Editar seu perfil</a>
      </footer>
    </aside>
  );
}
