import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Banner from "../../components/Banner";
import Products from "../../components/Products";

const fetchProducts = async (page, limit) => {
  const { data } = await axios.get(
    `http://localhost:7000/products?page=${page}&limit=${limit}`
  );
  return data;
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const { data: productsData, refetch } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => fetchProducts(currentPage, productsPerPage),
  });

  const products = productsData?.products;
  const totalPages = productsData?.totalPages;

  // Filtering and Sorting Logic
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
      return 0;
    }
  });

  // Pagination Controls
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Banner />
      <div className="mx-10">
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between mb-10">
          {/*  */}
          <input
            type="text"
            placeholder="Search products by name..."
            className="input input-bordered w-full lg:max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/*  */}
          <select
            className="select select-bordered w-full lg:max-w-xs"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="Logitech">Logitech</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            {/*  */}
          </select>

          {/* */}
          <select
            className="select select-bordered w-full lg:max-w-xs"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Cameras">Cameras</option>
            {/* */}
          </select>

          {/*  */}
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

          {/*  */}
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

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
          {sortedProducts?.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>

        {/*  */}
        <div className="flex justify-center mt-8">
          <button
            className="btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
