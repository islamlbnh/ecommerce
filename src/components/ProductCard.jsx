import React from "react";
import { useCart } from "../stores/cartStore";

export default function ProductCard({ product } ) {
    const add = useCart(state => state.add);

    return (
        <div className="border rounded-lg p-4 flex-1/2 flex-col">
            <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
            <h3 className="font-medium text-lg">{product.title}</h3>
            <p className="text-sm text-gray-500 flex-1 mt-2">{product.description.slice(0, 100)}...</p>
            <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
                <button
                    onClick={() => add(product, 1)}
                    className="px-3 py-1 rounded-md border bg-primary-600 text-white hover:opacity-90"
                >
                    Add
                </button>

            </div>
        </div>
    );
}
