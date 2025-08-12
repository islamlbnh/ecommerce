import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const { data, isLoading, isError } = useProducts();

    if (isLoading) {
        return <div className="container py-20">Loading...</div>;
    }

    if (isError) {
        return <div className="container py-20">Error loading products</div>;
    }

    return (
        <div className="container py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data && data.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
