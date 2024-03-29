//utils/woocommerceApi.ts
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Order } from "./types/wooCommerceTypes";

// initialise the WooCommerceRestApi //
// NOTE: must execute these API calls server-side because env vars only available there and it is more secure
const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
    version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
    const response = await api.get("products", {on_sale: true});
    return response.data;
}

// create new WooCommerce order by passing in required data object //
export async function createWooCommerceOrder(data: Order) {
    const response = await api.post("orders", data);
    return response;
}

export async function retrieveProductById(productId: string) {
    try {
        const response = await api.get(`products/${productId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
