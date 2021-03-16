import React from "react";
import Card from "./Card";
import Empty from "./Empty";
import { SERVER } from "./config";


const Products = (props) => {
  const { products } = props;
  

  return (
    <div className="product-page-display">
      {products.length ? (
        products.map((item) => (
          <Card key={item._id} items={item} />
        ))
      ) : (
          <Empty />
      )}
      <div>{/* <Pagination /> */}</div>
    </div>
  );
};

export default Products;
