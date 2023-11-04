import classes from "./App.module.css";
import MenuPage from "./Components/MenuPage";
import Data from "./Data/data.json";
function App() {
  return (
    <div className={classes["App"]}>
      <h1 className={classes["Apph1"]}> Response Summary</h1>
      <MenuPage data={Data[0]} />
      <MenuPage data={Data[1]} />
      <MenuPage data={Data[2]} />
    </div>
  );
}

export default App;
