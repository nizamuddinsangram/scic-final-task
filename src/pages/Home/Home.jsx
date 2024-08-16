import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useState } from "react";
import Products from "../../components/Products";
const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:7000/products");
  return data;
};
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("");
  const { data: products, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(products);
  //filter product by name
  // const filteredProducts = products?.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const filteredProducts = products
    ?.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedBrand ? product.brandName === selectedBrand : true
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

  const sortedProducts = filteredProducts?.sort((a, b) => {
    if (sortOption === "price-low-high") {
      return a.price - b.price;
    } else if (sortOption === "price-high-low") {
      return b.price - a.price;
    } else if (sortOption === "date-newest") {
      return new Date(b.created_at) - new Date(a.created_at);
    } else {
      return 0; // No sorting
    }
  });
  return (
    <div className="mx-10">
      {/* .... */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between mb-10">
        {/* Search by name */}
        <input
          type="text"
          placeholder="Search products by name..."
          className="input input-bordered w-full lg:max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Filter by brand */}
        <select
          className="select select-bordered w-full lg:max-w-xs"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="Logitech">Logitech</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          {/* Add more brand options as needed */}
        </select>

        {/* Filter by category */}
        <select
          className="select select-bordered w-full lg:max-w-xs"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Cameras">Cameras</option>
          {/* Add more category options as needed */}
        </select>

        {/* Filter by price range */}
        <div className="flex items-center w-full lg:max-w-xs">
          <span className="mr-2">${priceRange[0]}</span>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            className="range range-primary flex-grow"
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
          />
          <span className="ml-2">${priceRange[1]}</span>
        </div>

        {/* Sorting options */}
        <select
          className="select select-bordered w-full lg:max-w-xs"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="date-newest">Date Added: Newest First</option>
        </select>
      </div>
      {/* .... */}

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 mx-10 ">
        {filteredProducts?.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

{
  /* <input
type="text"
placeholder="search products by name ..."
className="input input-bordered mb-6 w-full"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>

<select
className="select select-bordered mb-6 w-full"
value={selectedBrand}
onChange={(e) => setSelectedBrand(e.target.value)}
>
<option value="">All Brands</option>
<option value="Logitech">Logitech</option>
<option value="Apple">Apple</option>
<option value="Samsung">Samsung</option>

</select>


<select
className="select select-bordered mb-6 w-full"
value={selectedCategory}
onChange={(e) => setSelectedCategory(e.target.value)}
>
<option value="">All Categories</option>
<option value="Electronics">Electronics</option>
<option value="Home Appliances">Home Appliances</option>
<option value="Cameras">Cameras</option>

</select>


<div className="flex justify-between items-center mb-6">
<span>${priceRange[0]}</span>
<input
  type="range"
  min="0"
  max="2000"
  value={priceRange[1]}
  className="range range-primary"
  onChange={(e) =>
    setPriceRange([priceRange[0], parseInt(e.target.value)])
  }
/>
<span>${priceRange[1]}</span>
</div> */
}
