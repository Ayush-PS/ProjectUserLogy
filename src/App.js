import classes from "./App.module.css";
import MenuPage from "./Components/MenuPage";
import Data from "./Data/data.json";
import Button from "./Components/Button";
import { useState } from "react";
import PopUp from "./Components/PopUp";
function App() {
  const showPopUpHandler = () => {
    setShowPopUp((el) => !el);
  };
 

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className={classes["App"]}>
      {/* <h1 className={classes["Apph1"]}> Response Summary</h1>
      <MenuPage data={Data[0]} />
      <MenuPage data={Data[1]} />
      <MenuPage data={Data[2]} /> */}
      {!showPopUp && <Button Show={showPopUpHandler} text="Clickme"/>}
      {showPopUp && <PopUp Show={showPopUpHandler} />}  
    </div>
     // please refer to the files Button.jsx and PopUp.jsx for the code i just wrote 
  );
}

export default App;
