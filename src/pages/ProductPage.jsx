import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../hooks/useProducts";
import { useCart } from "../stores/cartStore";

export default function ProductPage() {
    const { id } = useParams();
    const productId = Number(id);

    const { data: product, isLoading, isError } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchProduct(productId),
        enabled: !!productId, // Prevent fetching if id is invalid
    });

    const addToCart = useCart((state) => state.add);

    if (isLoading) {
        return <div className="container py-8">Loading...</div>;
    }

    if (isError || !product) {
        return <div className="container py-8">Product not found</div>;
    }

    return (
        <div className="w-[250px] py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[400px] object-contain"
                />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <p className="mt-3 text-gray-600">{product.description}</p>
                <div className="mt-4 text-2xl font-bold">${product.price}</div>
                <button
                    onClick={() => addToCart(product)}
                    className="mt-6 px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
}
