import React from 'react';
import { makeStyles } from "@mui/styles";
import "../fonts.css";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    bottom: "12px",
    right: "12px",
    padding: '4px',
    backgroundColor: 'rgb(255, 255, 255)',
    border: "0.5px solid rgb(190, 200, 219)",
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 6px 6px 10px',
    cursor: 'pointer'
  },
  colorCircle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    marginRight: '4px',
  },
  name: {
    fontSize: '10px',
    color: 'rgb(25, 20, 43)', 
    paddingRight: "6px",
    fontFamily: "Larsseit Bold",
  }
}));

const ColorChip = ({ name, color }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.name}>{name}</span>
      <div className={classes.colorCircle} style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorChip;
