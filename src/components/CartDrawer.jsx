import React from "react";
import { useCart } from "../stores/cartStore";
import { useDispatch } from "react-redux";
import { addOrder } from "../features/orders/ordersSlice";

export default function CartDrawer() {
    const { items, setQty, remove, total, clear } = useCart();
    const dispatch = useDispatch();

    const handleCheckout = () => {
        if (items.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Create a fake order
        const order = {
            id: Date.now().toString(),
            items: items.map((i) => ({
                productId: i.product.id,
                qty: i.qty,
            })),
            total: total(),
            createdAt: new Date().toISOString(),
        };

        dispatch(addOrder(order));
        clear();
        alert("Order placed!");
    };

    return (
        <div className="container py-8">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

            {items.length === 0 ? (
                <div className="text-gray-600">Cart is empty</div>
            ) : (
                <>
                    <div className="space-y-4">
                        {items.map((i) => (
                            <div
                                key={i.product.id}
                                className="flex items-center gap-4 border rounded p-3"
                            >
                                <img
                                    src={i.product.image}
                                    alt={i.product.title}
                                    className="h-16 w-16 object-contain"
                                />
                                <div className="flex-1">
                                    <div className="font-medium">{i.product.title}</div>
                                    <div className="text-sm text-gray-600">
                                        ${i.product.price}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        min={1}
                                        value={i.qty}
                                        onChange={(e) =>
                                            setQty(i.product.id, Number(e.target.value))
                                        }
                                        className="w-16 border rounded px-2 py-1"
                                    />
                                    <button
                                        onClick={() => remove(i.product.id)}
                                        className="text-sm text-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="text-xl font-bold">
                            Total: ${total().toFixed(2)}
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={clear}
                                className="px-4 py-2 border rounded hover:bg-gray-100"
                            >
                                Clear
                            </button>
                            <button
                                onClick={handleCheckout}
                                className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
