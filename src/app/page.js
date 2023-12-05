import styles from "./page.module.css";
import Login from "@/src/app/pages/login";
import ForgotPassword from "./pages/forgotPassword";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
