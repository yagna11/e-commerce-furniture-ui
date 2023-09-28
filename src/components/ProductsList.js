import React from "react";
import productData from "../data/products.json";
import ProductsHeader from "./ProductsHeader";
import ColorChip from "./ColorChip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";
import "../fonts.css";

const headerItems = [
  "Coffee Tables",
  "Side Tables",
  "Media Units",
  "Table Sets",
];

const ProductsList = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.topBar} />
      <header className={classes.header}>cozey</header>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Tables</div>
        <div className={classes.subText}>A perfect pairing to your sofa.</div>
      </div>
      <ProductsHeader items={headerItems} />
      {productData.products.map((category) => (
        <div key={category.category} id={category.category.replace(/\s+/g, "-").toLowerCase()} style={{
          marginTop: '-50px',
          paddingTop: '50px'
        }}>
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
                  <ColorChip name={item.woodType} color={item.woodColor} />
                </div>
                <span className={classes.productName}>{item.name}</span> <br />
                <div className={classes.priceContainer}>
                  <span className={classes.productPrice}>
                    ${item.price}
                    {item.financingOption && " or financing"}
                  </span>

                  <span className={classes.divider}> | </span>
                  {item.discount && (
                    <div className={classes.productDiscount}>
                      {item.discount}
                    </div>
                  )}

                  <div
                    className={classes.productCustomizerContainer}
                    style={{
                      flexBasis: item.discount && "100%",
                    }}
                  >
                    {item.customizable && (
                      <span className={classes.productCustomizer}>
                        Customise
                      </span>
                    )}
                    <div className={classes.arrowIcon}>
                      <ArrowForwardIcon />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className={classes.footer}></div>
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
    fontSize: 60,
  },
  subText: {
    color: "rgb(25, 20, 43)",
    fontFamily: "Larsseit Medium",
    fontSize: 20,
  },
  category: {
    textAlign: "center",
    color: "rgb(43, 44, 110)",
    fontFamily: "Quincy Regular",
    fontSize: 32,
    padding: "32px 80px 0px",
    "&::before": {
      content: "''",
      display: "block",
      height: 60, 
      marginTop: -60, 
      visibility: "hidden",
    }
  },
  productContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
    paddingLeft: 20,
    margin: "0 auto",
    maxWidth: 1280,
  },

  productItem: {
    width: 300,
  },
  productImage: {
    position: "relative",
    width: 400,
    height: 300,
    padding: "30px 0",
    background: "#f5f6f8",
    borderRadius: 30,
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
  priceContainer: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flexWrap: "wrap",
  },
  productPrice: {
    color: "rgb(83, 84, 138)",
    fontFamily: "Larsseit",
    fontSize: 11,
  },
  divider: {
    color: "rgb(83, 84, 138)",
  },
  productDiscount: {
    color: "rgb(179, 92, 30)",
    fontFamily: "Larsseit Bold",
    fontSize: 14,
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
  footer: {
    marginTop: 40,
    height: 150,
    backgroundColor: "rgb(238,238,238)",
  },
}));

export default ProductsList;
