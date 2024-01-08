import { singleProductBySlug, createWooCommerceOrder } from "../../utils/service";


export default async function Checkout({params}){
    const product = await singleProductBySlug(params.slug);

    const ordercreated = await createWooCommerceOrder(product[0].id);
    console.log("order create=", ordercreated);
}