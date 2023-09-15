import React from "react";
// import products from "./data/Data";
const Contants = ({ product, products, setissow, issow }) => {
  return (
    <>
      {products.slice(product * 10 - 10, product * 10).map((e) => {
        return (
          <div className="bg" key={e.id}>
            <img
              style={{ contain: " vaidik" }}
              onMouseOver={() => setissow(() => !issow)}
              src={e.thumbnail}
              alt=""
            />
            {issow ? <div>{e.title}</div> : null}
          </div>
        );
      })}
    </>
  );
};

export default Contants;
