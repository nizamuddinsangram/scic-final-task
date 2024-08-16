// import React from "react";

// const Products = ({ product }) => {
//   const { category, description, image, name, price, ratings, created_at } =
//     product;
//   //   console.log(category);
//   return (
//     <div className="card bg-base-100 w-96 shadow-xl">
//       <figure className="px-10 pt-10">
//         <img src={image} alt="image" className="rounded-xl" />
//       </figure>
//       <div className="card-body  ">
//         <h2 className="card-title">{category}</h2>
//         <p>{description}</p>
//         <div className="flex justify-between">
//           <p>{name}</p>
//           <p>{ratings}</p>
//         </div>
//         {/* <div className="card-actions">
//           <button className="btn btn-primary">Buy Now</button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from "react";

const Products = ({ product }) => {
  const { category, description, image, name, price, ratings } = product;

  return (
    <div className="card bg-base-100 w-full max-w-xs md:max-w-sm lg:max-w-md shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="product"
          className="rounded-xl h-48 object-cover w-full"
        />
      </figure>
      <div className="card-body flex flex-col justify-between h-64">
        <h2 className="card-title">{category}</h2>
        <p className="flex-grow">{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">{name}</p>
          <p className="font-semibold text-primary">{price}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-sm text-gray-500">Ratings: {ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
