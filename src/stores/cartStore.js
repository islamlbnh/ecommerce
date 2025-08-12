import { create } from "zustand";

export const useCart = create((set, get) => ({
    items: [],

    add(product, qty = 1) {
        set((state) => {
            const found = state.items.find((i) => i.product.id === product.id);
            if (found) {
                return {
                    items: state.items.map((i) =>
                        i.product.id === product.id
                            ? { ...i, qty: i.qty + qty }
                            : i
                    ),
                };
            }
            return { items: [...state.items, { product, qty }] };
        });
    },

    remove(productId) {
        set((state) => ({
            items: state.items.filter((i) => i.product.id !== productId),
        }));
    },

    setQty(productId, qty) {
        set((state) => ({
            items: state.items.map((i) =>
                i.product.id === productId ? { ...i, qty } : i
            ),
        }));
    },

    total() {
        return get().items.reduce(
            (sum, it) => sum + it.product.price * it.qty,
            0
        );
    },

    clear() {
        set({ items: [] });
    },
}));
