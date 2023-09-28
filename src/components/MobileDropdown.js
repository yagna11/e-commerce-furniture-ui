import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../fonts.css";

const MobileDropdown = ({ items }) => {
  const [openHeader, setOpenHeader] = useState(false);
  const classes = useStyles({ openHeader });

  return (
    <div
      className={classes.dropdownContainer}
      onClick={() => setOpenHeader(!openHeader)}
    >
      <div className={classes.header}>
        {items[0]}
        <div className={classes.svgContainer}>
          {openHeader ? (
            <KeyboardArrowUpIcon fontSize="large" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" />
          )}
        </div>
      </div>
      {openHeader &&
        items.slice(1).map((item) => (
          <div key={item} className={classes.header}>
            {item}
          </div>
        ))}
    </div>
  );
};

const useStyles = makeStyles({
  dropdownContainer: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    overflow: "hidden",
    background: "#19142c",
    cursor: "pointer",
    transition: "height 0.15s ease-out",
    height: (props) => (props.openHeader ? "60px" : "250px"),
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0px 20px",
    color: "rgb(212, 218, 231)",
    fontSize: 18,
    fontFamily: "Larsseit",
    padding: "15px 0px",
  },
  svgContainer: {
    width: 30,
    height: 30,
  },
});

export default MobileDropdown;
