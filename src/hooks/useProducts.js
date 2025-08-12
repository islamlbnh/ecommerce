import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

// Fetch all products
export const fetchProducts = async () => {
    const { data } = await api.get("/products");
    return data;
};

// Hook for all products
export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
};

// Fetch single product by ID
export const fetchProduct = async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
};

// Hook for single product
export const useProduct = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProduct(id),
        enabled: !!id, // Avoid fetching if id is falsy
    });
};
