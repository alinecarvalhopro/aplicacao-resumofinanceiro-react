import styles from "./style.module.css";
import logo from "../../assets/nukenzie.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.img_logo} src={logo} alt="" />
    </header>
  );
}
