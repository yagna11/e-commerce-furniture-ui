import React from "react";
import { makeStyles } from "@mui/styles";
import "../fonts.css";

const ColorChip = ({ name, color }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.name}>{name}</span>
      <div
        className={classes.colorCircle}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "rgb(255, 255, 255)",
    border: "0.5px solid rgb(190, 200, 219)",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    padding: "6px 6px 6px 10px",
    cursor: "pointer",
    "@media (max-width: 750px)": {
      padding: "4px 4px 4px 6px",
    },
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    marginRight: 4,
    "@media (max-width: 750px)": {
      width: 12,
      height: 12,
    },
  },
  name: {
    fontSize: 10,
    color: "rgb(25, 20, 43)",
    paddingRight: 6,
    fontFamily: "Larsseit Bold",
    "@media (max-width: 750px)": {
      fontSize: 8,
    },
  },
}));

export default ColorChip;
