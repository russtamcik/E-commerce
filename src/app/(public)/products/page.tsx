"use client";
import { useRouter, useSearchParams } from "next/navigation";
import "./style.scss";

const Products = () => {
  const router = useRouter();
  let search = useSearchParams();
  console.log(search);

  console.log(search.get("page"));
  console.log(search.get("limit"));

  const changePage = (page: number) => {
    router.push(`/products/?page=${page}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="btn">
        <button onClick={() => changePage(1)}>1</button>
        <button onClick={() => changePage(2)}>2</button>
      </div>
    </div>
  );
};

export default Products;
