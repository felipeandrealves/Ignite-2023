import IgniteLogo from "../../assets/img/ignite-logo.svg";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
