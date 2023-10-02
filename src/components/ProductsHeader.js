import React from "react";
import { makeStyles } from "@mui/styles";
import MobileDropdown from "./MobileDropdown";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../fonts.css";

const ProductsHeader = ({ items, activeCategory }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:870px)");

  return isMobile ? (
    <MobileDropdown items={items} activeCategory={activeCategory} />
  ) : (
    <div className={classes.banner}>
      <div className={classes.bannerText}>
        {items.map((item) => (
          <a
            className={`${classes.link} ${
              item === activeCategory ? classes.active : ""
            }`}
            href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
            key={item}
          >
            <span>{item}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  banner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(25, 20, 43)",
    position: "sticky",
    top: 0,
    height: 60,
    zIndex: 10,
  },
  bannerText: {
    color: "rgb(212, 218, 231)",
    fontFamily: "Larsseit",
    fontSize: 16,
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    "@media (min-width: 1200px)": {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0px 80px",
      gap: 48,
    },
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  },
  active: {
    borderBottom: "4px solid rgb(255, 255, 255)",
  },
}));

export default ProductsHeader;
