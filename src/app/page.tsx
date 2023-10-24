"use client";

import NavBar from "@/components/NavBar";
import type { AppDispatch, RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux/";
import { useEffect } from "react";
import { fetchProducts } from "./GlobalRedux/Features/product/productSlice";
import Link from "next/link";
import { fetchConfig } from "./GlobalRedux/Features/product/configSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const productsStatus = useSelector(
    (state: RootState) => state.products.status
  );
  const configStatus = useSelector(
    (state: RootState) => state.configuration.status
  );
  const productsError = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (productsStatus === "idle" && configStatus === "idle") {
      dispatch(fetchProducts());
      dispatch(fetchConfig());
    }
  }, [productsStatus, configStatus, dispatch]);
  if (productsStatus === "loading" && configStatus === "loading") {
    return <div>loading...</div>;
  }
  return (
    <div className="">
      <NavBar />
      <Link href={{ pathname: "/product", query: { productId: "this way" } }}>
        <span className="px-2 py-1 bg-blue-900 border border-solid border-blue-700 mt-20 text-white rounded-lg">
          Product
        </span>
      </Link>
    </div>
  );
}
