import React from "react";
import Stack from "@mui/material/Stack";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DoneIcon from "@mui/icons-material/Done";
import classes from "./MenuPage.module.css";
import PlaceHolder from "./PlaceHolder";
import ProgressBar from "./Progress";
function MenuPage({ data }) {
  let iconToRender;

  switch (data.icon) {
    case "PeopleAlt":
      iconToRender = <PeopleAltIcon fontSize="small" />;
      break;
    case "CalendarMonth":
      iconToRender = <CalendarMonthIcon fontSize="small" />;
      break;
    default:
      iconToRender = <DoneIcon fontSize="small" />; // You can set a default value or render nothing for unknown iconName
      break;
  }
  return (
    <div className={classes["menupage"]}>
      <Stack
        direction="row"
        justifyContent="space-around"
        maxWidth={"80%"}
        gap={5}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={0.5}
          height={"20px"}
          width={"50px"}
          color={"white"}
          className="SideBox"
          borderRadius={"5px"}
          bgcolor={"black"}
          padding={"5px"}
        >
          {iconToRender}
          <div>{data.QuestionNo}</div>
        </Stack>
        <Stack direction="column" gap={2} pl={4} width="100%">
          <div className={classes["nameanddes"]}>
            <div className={classes["namesub"]}>{data.Question}</div>
            <div className={classes["namesub1"]}>
              {`${data.Number} out of ${data.Totalno} attempted this question`}
            </div>
          </div>
    
            {data.Type === "Single-Select" ? (
              <ul className={classes["placeholder"]}>
                {data.responses.map((items) => (
                  <PlaceHolder
                    name={items.response}
                    time={items.time}
                    Totalno={data.Totalno}
                  />
                ))}
              </ul>
            ) : (
              <ul className={classes["Progressbar"]}>
                {data.responses.map((items) => (
                  <ProgressBar
                    time={items.time}
                    name={items.response}
                    number={items.number}
                    Totalno={data.Totalno}
                  />
                ))}
              </ul>
            )}
          
        </Stack>
      </Stack>
    </div>
  );
}

export default MenuPage;
