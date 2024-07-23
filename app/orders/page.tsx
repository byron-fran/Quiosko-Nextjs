"use client"
import OrderLatestItem from "@/components/order/OrderLatestItem";
import Logo from "@/components/ui/Logo"
import { OrderWithProducts } from "@/src/types";
import useSWR from "swr";

const AllOrdersPage = () => {
    const url = '/orders/api';
    const fetcher = () => fetch(url)
        .then(res => res.json())
        .then(data => data)

    const { data: orders, isLoading, error } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false
    });

    if (isLoading) return 'loading...'
    if (orders)
        return (
            <>
                <h1 className="mt-20 text-center text-6xl ">
                    Lista ordenes
                </h1>
                <Logo />
                {orders.length ? (
                    <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10">
                        {orders.map(order => (
                            <OrderLatestItem
                                order={order}
                                key={order.id} />
                        ))}
                    </div>
                ) : <p className="text-center">No hay ordenes</p>}
            </>
        )
}

export default AllOrdersPage
