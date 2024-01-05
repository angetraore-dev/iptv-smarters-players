//const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "https://gstreams.eu",
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
    version: "wc/v3",
});

export default async function handler(req, res) {
    const responseData = {
        success: false,
        products: []
    }

    try {
        const { data } = await api.get(
            'products',
            {
                per_page: 50
            }
        );

        responseData.success = true;
        responseData.products = data;
        res.json( responseData );

    } catch (error){

        responseData.products = error.message;
        res.status( 500 ).json( responseData );

    }
}