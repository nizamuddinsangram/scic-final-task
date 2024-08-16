import React from "react";

const Products = ({ product }) => {
  const { category, description, image, name, price, ratings, created_at } =
    product;
  //   console.log(category);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="image" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{category}</h2>
        <p>{description}</p>
        <div className="flex justify-between">
          <p>{name}</p>
          <p>{ratings}</p>
        </div>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
