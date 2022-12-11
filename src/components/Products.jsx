import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      await axios
        .get(
          "https://onlinecarrenting.azurewebsites.net/api/v1/Cars/GetCarList?pagesize=20&pagenumber=1"
        )
        .then((res) => {
          const products = res.data.data;
          setData(products);
          setFilter(products);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <p className="loading">Loading...</p>
      </>
    );
  };

  const filterProduct = (brand) => {
    const updatedList = data.filter((x) => x.brand === brand);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons">
          <button className="btn" type="submit" onClick={() => setFilter(data)}>
            All
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterProduct("Toyota")}
          >
            Toyota
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterProduct("Chevrolet")}
          >
            Chevrolet
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterProduct("Ford")}
          >
            Ford
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterProduct("Honda")}
          >
            Honda
          </button>
        </div>
        <div className="cards">
          {filter.map((product) => {
            return (
              <div className="card" key={product.id}>
                <div className="card-header">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="card-body">
                  <h3 className="title">{product.name.substring(0, 15)}...</h3>
                  <div className="other">
                    {/* <span>Rate: {product.rating.rate}</span> */}
                    <span>{product.price} ₫</span>
                  </div>
                </div>
                <div className="card-footer">
                  <Link to={`/products/${product.id}`} className="rentNow">
                    Rent Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="products">
      <div className="container">
        <div className="row rowTitle">
          <div className="col">
            <h1 className="title">Lastest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row productsRow">
          <div className="col">{loading ? <Loading /> : <ShowProducts />}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
