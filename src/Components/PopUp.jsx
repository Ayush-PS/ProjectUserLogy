import React from 'react';
import classes from './PopUp.module.css';
import Button from './Button';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
const PopUp = (props) => {
    const showTextHandler = () => {
        setShowText((el)=>!el);
      };
      const [showText, setShowText] = useState(false);
      const txt = !showText ? "Click ok say hello and close to close" : " Hello World";
  return (
    <div className={classes["Box"]}>
      <div className={classes["popup"]}>
       <div className={classes["topbox"]}> <CancelIcon color='black' onClick={props.Show}/></div> 
        <h2>PopUp</h2>
        <p>{txt}</p>
        <div className={classes["bottombox"]}>
         <Button Show={showTextHandler} text="Ok"/>
        <Button Show={props.Show} text ="Close"/>
        </div>
      </div>
    </div>
  );
};

export default PopUp;