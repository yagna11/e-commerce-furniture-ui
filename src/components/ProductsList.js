import React from "react";
import productData from "../data/products.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";
import "../fonts.css";

const ProductsList = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.topBar}></div>
      <header className={classes.header}>cozey</header>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Tables</div>
        <div className={classes.subText}>A perfect pairing to your sofa.</div>
      </div>
      <div className={classes.banner}>
        <div className={classes.bannerText}>
          <span>Coffee Tables</span>
          <span>Side Tables</span>
          <span>Media Units</span>
          <span>Table Sets</span>
        </div>
      </div>
      {productData.products.map((category) => (
        <div key={category.category}>
          <h2 className={classes.category}>{category.category}</h2>
          <div className={classes.productContainer}>
            {category.items.map((item) => (
              <div key={item.name} className={classes.productItem}>
                <div className={classes.productImage}>
                  <img
                    src={item.imagePath}
                    alt={item.name}
                    className={classes.image}
                  />
                </div>
                <span className={classes.productName}>{item.name}</span> <br />
                <span className={classes.productPrice}>
                  ${item.price}
                  {item.financingOption && " or financing"}
                </span>
                <span className={classes.divider}> | </span>
                <div className={classes.productCustomizerContainer}>
                  {item.customizable && (
                    <span className={classes.productCustomizer}>
                      {" "}
                      Customize
                    </span>
                  )}
                  <div className={classes.arrowIcon}>
                    <ArrowForwardIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  topBar: {
    backgroundColor: "rgb(105, 162, 255)",
    height: 32,
  },
  header: {
    height: 48,
    fontFamily: "Campton Bold",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 8,
    fontSize: 38,
    backgroundColor: "rgb(238,238,238)",
  },
  titleContainer: {
    padding: "16px 80px",
  },
  title: {
    color: "rgb(43, 44, 110)",
    fontFamily: "QuincyCFBold",
    fontSize: 44,
  },
  subText: {
    color: "rgb(25, 20, 43)",
    fontFamily: "Larsseit Medium",
    fontSize: 18,
  },
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
  category: {
    textAlign: "center",
    color: "rgb(43, 44, 110)",
    fontFamily: "Quincy Regular",
    fontSize: 32,
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
    paddingLeft: "20px",
  },
  productItem: {
    width: "300px",
  },
  productImage: {
    width: "300px",
    height: "200px",
    padding: "30px 0",
    background: "#f5f6f8",
    borderRadius: "30px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  productName: {
    color: "rgb(43, 44, 110)",
    fontFamily: "CamptonSemiBold",
    fontSize: 14,
  },
  productPrice: {
    color: "rgb(83, 84, 138)",
    fontFamily: "Larsseit",
    fontSize: 11,
  },
  divider: {
    color: "rgb(83, 84, 138)",
  },
  productCustomizerContainer: {
    display: "flex",
    alignItems: "center",
  },
  productCustomizer: {
    fontSize: 10,
    fontFamily: "Larsseit Bold",
  },
  arrowIcon: {
    "& .MuiSvgIcon-root": {
      fontSize: 16,
    },
  },
}));

export default ProductsList;
