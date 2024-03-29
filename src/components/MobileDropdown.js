import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../fonts.css";

const MobileDropdown = ({ items, activeCategory }) => {
  const [openHeader, setOpenHeader] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState(items[0]);
  const classes = useStyles({ openHeader });

  useEffect(() => {
    if (activeCategory) {
      setSelectedHeader(activeCategory);
    }
  }, [activeCategory]);

  return (
    <div
      className={classes.dropdownContainer}
      onClick={() => setOpenHeader(!openHeader)}
    >
      <div className={classes.header}>
        {selectedHeader}
        <div className={classes.svgContainer}>
          {openHeader ? (
            <KeyboardArrowUpIcon fontSize="large" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" />
          )}
        </div>
      </div>
      {openHeader &&
        items.map((item) => (
          <a
            className={classes.link}
            href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
            key={item}
            onClick={() => setSelectedHeader(item)}
          >
            <div key={item} className={classes.header}>
              {item}
            </div>
          </a>
        ))}
    </div>
  );
};

const useStyles = makeStyles({
  dropdownContainer: {
    zIndex: 100,
    position: "sticky",
    top: 0,
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
    margin: "0px 30px",
    color: "rgb(212, 218, 231)",
    fontSize: 18,
    fontFamily: "Larsseit",
    padding: "15px 0px",
  },
  svgContainer: {
    width: 30,
    height: 30,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  },
});

export default MobileDropdown;
