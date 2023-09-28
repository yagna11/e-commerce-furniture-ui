import React from 'react';
import { makeStyles } from "@mui/styles";
import "../fonts.css";

const ProductsHeader = ({items}) => {
    const classes = useStyles();
return(
    <div className={classes.banner}>
      <div className={classes.bannerText}>
        {items.map(item => <span key={item}>{item}</span>)}
      </div>
    </div>
)
}

const useStyles = makeStyles(() => ({
    banner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(25, 20, 43)",
      position: "sticky",
      top: 0,
      height: "60px",
    },
    bannerText: {
      color: "rgb(212, 218, 231)",
      fontFamily: "Larsseit",
      fontSize: 16,
      display: "flex",
      justifyContent: "space-evenly",
      width: "100%",
    },
  }));
  
  

export default ProductsHeader