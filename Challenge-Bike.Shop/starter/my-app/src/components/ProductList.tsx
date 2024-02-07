import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  gender: string;
  brand: string;
  image: string;
  name: string;
  price: number;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("show-all");
  const [filterCounts, setFilterCounts] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((response) => {
        if (Array.isArray(response.products)) {
          setProducts(response.products);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const counts: { [key: string]: number } = {};
    counts["show-all"] = products.length;
    counts["male"] = products.filter(
      (product: Product) => product.gender === "MALE"
    ).length;
    counts["female"] = products.filter(
      (product: Product) => product.gender === "FEMALE"
    ).length;
    counts["le-grand"] = products.filter(
      (product: Product) => product.brand === "LE GRAND BIKES"
    ).length;
    counts["kross"] = products.filter(
      (product: Product) => product.brand === "KROSS"
    ).length;
    counts["explorer"] = products.filter(
      (product: Product) => product.brand === "EXPLORER"
    ).length;
    counts["visitor"] = products.filter(
      (product: Product) => product.brand === "VISITOR"
    ).length;
    counts["pony"] = products.filter(
      (product: Product) => product.brand === "PONY"
    ).length;
    counts["force"] = products.filter(
      (product: Product) => product.brand === "FORCE"
    ).length;
    counts["e-bikes"] = products.filter(
      (product: Product) => product.brand === "E-BIKES"
    ).length;
    counts["ideal"] = products.filter(
      (product: Product) => product.brand === "IDEAL"
    ).length;
    setFilterCounts(counts);
  }, [products]);

  const filterProducts = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProducts = (): Product[] => {
    switch (activeFilter) {
      case "male":
        return products.filter((product: Product) => product.gender === "MALE");
      case "female":
        return products.filter(
          (product: Product) => product.gender === "FEMALE"
        );
      case "le-grand":
        return products.filter(
          (product: Product) => product.brand === "LE GRAND BIKES"
        );
      case "kross":
        return products.filter((product: Product) => product.brand === "KROSS");
      case "explorer":
        return products.filter(
          (product: Product) => product.brand === "EXPLORER"
        );
      case "visitor":
        return products.filter(
          (product: Product) => product.brand === "VISITOR"
        );
      case "pony":
        return products.filter((product: Product) => product.brand === "PONY");
      case "force":
        return products.filter((product: Product) => product.brand === "FORCE");
      case "e-bikes":
        return products.filter(
          (product: Product) => product.brand === "E-BIKES"
        );
      case "ideal":
        return products.filter((product: Product) => product.brand === "IDEAL");
      default:
        return products;
    }
  };

  const filterButtons = [
    { label: "Show all", filter: "show-all" },
    { label: "Male", filter: "male" },
    { label: "Female", filter: "female" },
    { label: "LE GRAND BIKES", filter: "le-grand" },
    { label: "KROSS", filter: "kross" },
    { label: "EXPLORER", filter: "explorer" },
    { label: "VISITOR", filter: "visitor" },
    { label: "PONY", filter: "pony" },
    { label: "FORCE", filter: "force" },
    { label: "E-BIKES", filter: "e-bikes" },
    { label: "IDEAL", filter: "ideal" },
  ];

  return (
    <div className="content-containers">
      <div className="filter-containers">
        <div className="show-all">
          <h2>Filter by:</h2>
          {filterButtons.map((button, index) => (
            <div key={index}>
              {index === 1 && <h3 className="gender">Gender</h3>}
              {button.label === "LE GRAND BIKES" ? (
                <h3 className="brand">Brand</h3>
              ) : (
                <button
                  className={`btn btn-block ${
                    activeFilter === button.filter ? "active" : ""
                  }`}
                  onClick={() => filterProducts(button.filter)}
                  id={button.filter}
                  style={{
                    color:
                      activeFilter === button.filter ? "orange" : "initial",
                  }}
                >
                  {button.label}{" "}
                  <span
                    className="badge"
                    style={{
                      backgroundColor:
                        activeFilter === button.filter ? "orange" : "gray",
                    }}
                  >
                    {filterCounts[button.filter]}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="card-container">
        {filteredProducts().map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
