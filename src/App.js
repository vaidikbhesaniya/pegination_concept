import React from "react";
import "./App.css";
// import products from "./data/Data";
import { useState, useEffect, Suspense, lazy } from "react";
// import Contants from "./Contants";

import Loading from "./Loading";
const Contants = lazy(() => import("./Contants"));
// const Loading = lazy(() => import("./Loading"));
const App = () => {
  const [products, setpro] = useState([]);
  const [issow, setissow] = useState(false);
  const fetchapi = async () => {
    const url = "https://dummyjson.com/products?limit=100";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data) {
      setpro(data.products);
      console.log(products);
    }
  };
  useEffect(() => {
    fetchapi();
  }, []);

  const [product, setproduct] = useState(1);

  function handleup(h) {
    setproduct(h);
  }

  return (
    <>
      <div className="product">
        <Suspense fallback={<Loading />}>
          <Contants
            setissow={setissow}
            issow={issow}
            products={products}
            product={product}
          ></Contants>
        </Suspense>
      </div>

      <div className="nav">
        <span
          onClick={() => handleup(product - 1)}
          className={product <= products.length / 10 ? "" : "pdish"}
        >
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
        {[...Array(products.length / 10)].map((_, i) => {
          return i > 0 ? (
            <span
              className={product === i ? "dark" : null}
              onClick={() => handleup(i)}
            >
              {i}
            </span>
          ) : null;
        })}
        <span
          onClick={() => handleup(product + 1)}
          className={product < products.length / 10 ? "" : "pdish"}
        >
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
      {/* <Loading></Loading> */}
      <div className="footer">
        developer : <span> Vaidik bhesaniya</span>
      </div>
    </>
  );
};

export default App;
