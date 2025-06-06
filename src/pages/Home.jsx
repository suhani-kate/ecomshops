import axios from "axios";
import {  useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import './Home.css'






function Home() {

  
   
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
 console.log(products);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setFiltered(res.data);

    const catRes = await axios.get("https://fakestoreapi.com/products/categories");
    setCategories(catRes.data);
  };

  useEffect(() => {
    let temp = [...products];

    if (search) {
      temp = temp.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      temp = temp.filter((item) => item.category === selectedCategory);
    }

    temp = temp.filter((item) => item.price <= priceRange);

    setFiltered(temp);
    setCurrentPage(1); // Reset to page 1 on filters
  }, [search,products, selectedCategory, priceRange]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div  className="home-container" style={{ padding: "1rem" }}>
      <h2 className="home-title">All Products</h2>
 


      {/* Filters */}
      <div className="filters-container" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
        className="search-input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <div className="price-filter">
          <label>Max Price: ${priceRange}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div
      className="products-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem"
        }}
      >
        {currentProducts.length ? (
          currentProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <div  className="pagination"  style={{ marginTop: "1rem" }}>
        {Array.from({ length: Math.ceil(filtered.length / productsPerPage) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 4px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal"
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
