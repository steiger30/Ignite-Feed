import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          asdfsadfasdfasdsadfasdfasdfasdfasdfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          asdfsadfasdfasdsadfasdfasdfasdfasdfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          asdfsadfasdfasdsadfasdfasdfasdfasdfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </main>
      </div>
    </>
  );
}

export default App;
