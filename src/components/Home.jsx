import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, getProducts } from "../reducer/cartSlice";
import { AddCart2 } from "../reducer/cartSlice copy";
import NavBar from "./NavBar";

function Home() {
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productsState = useSelector((state) => state.products);
  console.log("@SN ", productsState);
  const dispatch = useDispatch();

  const handleOnclick = (item) => {
    dispatch(AddCart(item));
  };
  const handleWishList = (item) => {
    dispatch(AddCart2(item));
  };
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
        {productsState.cartProducts &&
          productsState.cartProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="card"
                style={{
                  width: "18rem",
                  alignItems: "center",
                  border: "2px solid",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="Card image cap"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-sm mb-2"
                    data-mdb-toggle="tooltip"
                    title="Move to the wish list"
                    style={{ height: "fit-content" }}
                    onClick={() => handleWishList(item)}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
                <div
                  className="card-body"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h5 className="card-title">{item.title}</h5>
                  <h3>${item.price}</h3>
                  <button className="btn" onClick={() => handleOnclick(item)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
