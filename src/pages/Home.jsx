import React from "react";
import ProductList from "../components/ProductList";

export default function Home() {
    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
            <p className="text-gray-600 mb-6">Quality products curated for you.</p>
            <ProductList />
        </div>

    );
}
