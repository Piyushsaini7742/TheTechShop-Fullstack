import React from "react";

const MyOrders = () => {

    const orders = [
        {
            id: "#12345",
            product: "RGB Gaming Keyboard",
            status: "Shipped",
            date: "Feb 20, 2025",
        },
        {
            id: "#12346",
            product: "Ergonomic Gaming Mouse",
            status: "Delivered",
            date: "Feb 18, 2025",
        },
        {
            id: "#12347",
            product: "Premium PC Cabinet",
            status: "Processing",
            date: "Feb 22, 2025",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center">
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-6">My Orders</h2>
                <p className="text-gray-600 text-center mb-8">
                    Track your orders and view your purchase history.
                </p>

                <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Order ID</th>
                                <th className="py-2 px-4 border-b">Product</th>
                                <th className="py-2 px-4 border-b">Status</th>
                                <th className="py-2 px-4 border-b">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-200 transition duration-300">
                                    <td className="py-2 px-4">{order.id}</td>
                                    <td className="py-2 px-4">{order.product}</td>
                                    <td className="py-2 px-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === "Shipped"
                                                    ? "bg-blue-500 text-white"
                                                    : order.status === "Delivered"
                                                        ? "bg-green-500 text-white"
                                                        : "bg-yellow-500 text-black"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
