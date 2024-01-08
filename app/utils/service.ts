//utils/service.ts my customs api calls
import { wooCommerceRestApi } from "./base";

//Fetch All Products from Woocommerce
export const fetchWooCommerceProducts = async () => {

    const response = await wooCommerceRestApi.get("products", {on_sale:true});

    return response.data;
}

/**
 * Fetch Single product by id
 * @param id
 */
export async function singleProduct (id) {

    const response = await wooCommerceRestApi.get(`products/${id}`);

    return response.data;

}

/**
 * Fetch product by slug
 * @param slug
 */
export const singleProductBySlug = async (slug) => {
    const response = await wooCommerceRestApi.get(`products/?slug=${slug}`);

    return response.data;

}

/**
 * Create order
 * @param productId
 */
export async function createWooCommerceOrder (productId) {
    const data = {
        payment_method: "cash",
        payment_method_title: "Cash",
        set_paid: false,
        billing: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "angetraore.dev@gmail.com",
            phone: "(555) 555-5555"
        },
        shipping: {
            first_name: "Ange",
            last_name: "Traore",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
        },
        line_items: [
            {
                product_id: productId,
                quantity: 1
            }
        ]
    };
    //,
    //         shipping_lines: [
    //             {
    //                 method_id: "flat_rate",
    //                 method_title: "Flat Rate",
    //                 total: "10.00"
    //             }
    //         ]

    const response = await wooCommerceRestApi.post("orders", data);

    return response.data;
}

