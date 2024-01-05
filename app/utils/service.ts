//utils/service.ts my customs api calls
import { wooCommerceRestApi } from "./base";

//Fetch All Products from Woocommerce
export const fetchWooCommerceProducts = async () => {

    const response = await wooCommerceRestApi.get("products", {on_sale:true});

    return response.data;
}

//Fetch Single Product
export async function singleProduct (id) {

    const response = await wooCommerceRestApi.get("products", {id: id});

    return response.data;

}

export async function createWooCommerceOrder (data) {
    const response = await wooCommerceRestApi.post("orders", data);
    console.log(response);

    return response.data;
}

