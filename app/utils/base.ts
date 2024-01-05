//utils/base.ts represents customApi.ts
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

//WC API /wp-json/wc/v3
export const wooCommerceRestApi = new WooCommerceRestApi({
    url: "https://gstreams.eu",
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
    version: "wc/v3",
});
