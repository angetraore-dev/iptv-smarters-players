import { wooCommerceRestApi } from "./base";
import { Order } from "./wooCommerceTypes";
import { data } from "./data";

//Fetch All Products from Woocommerce
export const fetchWooCommerceProducts = async () => {

    const response = await wooCommerceRestApi.get("products", {on_sale:true});

    return response.data;

}

export async function createWooCommerceOrder (data) {
    const response = await wooCommerceRestApi.post("orders", data);
    console.log(response);

    return response.data;
}

//Fetch Single Product
export async function singleProduct (id) {

    const response = await wooCommerceRestApi.get("products", {id: id});

    return response.data;

}

/**
 * const API_URL = String(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
 * const headers = { "Content-Type": "application/json" };
 *
 * export async function getWooProducts() {
 *
 *     const { data } = await fetch(API_URL, {
 *         method: "POST",
 *         headers: headers,
 *         body: JSON.stringify({
 *             query: `query WooProducts($first: Int = 10, $last: Int, $after: String, $before: String) {
 *                 products(
 *                     first: $first
 *                 last: $last
 *                 after: $after
 *                 before: $before
 *                 where: {onSale: true}
 *             ) {
 *                     pageInfo {
 *                         endCursor
 *                         hasNextPage
 *                         hasPreviousPage
 *                         startCursor
 *                     }
 *                     edges {
 *                         cursor
 *                         node {
 *                             id
 *                             slug
 *                             name
 *                             sku
 *                             type
 *                             databaseId
 *                             description
 *                             shortDescription
 *                             image {
 *                                 id
 *                                 sourceUrl
 *                                 altText
 *                             }
 *                         ... on SimpleProduct {
 *                                 onSale
 *                                 price
 *                                 content
 *                                 regularPrice
 *                             }
 *                         ... on VariableProduct {
 *                                 onSale
 *                                 price
 *                                 content
 *                                 regularPrice
 *                             }
 *                         }
 *                     }
 *                 }
 *             }`,
 *         }),
 *         next: { revalidate: 10},
 *
 *     }).then((res) => res.json());
 *
 *      return data?.products?.edges;
 * }
 *
 * export async function OneProduct (databaseId) {
 *
 *     const res = await fetch(API_URL,{
 *         method: "POST",
 *         headers: headers,
 *         body: JSON.stringify({
 *             query:  `query getProduct($databaseId: ID!) {
 *   product(id: $databaseId, idType: DATABASE_ID) {
 *     id
 *     databaseId
 *     slug
 *     name
 *     type
 *     description
 *     shortDescription(format: RAW)
 *     image {
 *       id
 *       sourceUrl
 *       altText
 *     }
 *     galleryImages {
 *       nodes {
 *         id
 *         sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
 *         altText
 *       }
 *     }
 *     productTags(first: 20) {
 *       nodes {
 *         id
 *         slug
 *         name
 *       }
 *     }
 *     attributes {
 *       nodes {
 *         id
 *         attributeId
 *         ... on LocalProductAttribute {
 *           name
 *           options
 *           variation
 *         }
 *         ... on GlobalProductAttribute {
 *           name
 *           options
 *           variation
 *         }
 *       }
 *     }
 *     ... on SimpleProduct {
 *       onSale
 *       stockStatus
 *       price
 *       rawPrice: price(format: RAW)
 *       regularPrice
 *       salePrice
 *       stockStatus
 *       stockQuantity
 *       soldIndividually
 *     }
 *     ... on VariableProduct {
 *       onSale
 *       price
 *       rawPrice: price(format: RAW)
 *       regularPrice
 *       salePrice
 *       stockStatus
 *       stockQuantity
 *       soldIndividually
 *       variations(first: 50) {
 *         nodes {
 *           id
 *           databaseId
 *           name
 *           price
 *           rawPrice: price(format: RAW)
 *           regularPrice
 *           salePrice
 *           onSale
 *           attributes {
 *             nodes {
 *               name
 *               label
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }`,
 *             variables:{databaseId}
 *         }),
 *         next:{ revalidate: 10 }
 *     });
 *
 *     const json = await (await res.json());
 *
 *     return json.data.product;
 * }
 *
 * export const theOne = async (databaseId) => {
 *     const query = `query getProduct($databaseId: ID!) {
 *   product(id: $databaseId, idType: DATABASE_ID) {
 *     id
 *     databaseId
 *     slug
 *     name
 *     type
 *     description
 *     shortDescription(format: RAW)
 *     image {
 *       id
 *       sourceUrl
 *       altText
 *     }
 *     galleryImages {
 *       nodes {
 *         id
 *         sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
 *         altText
 *       }
 *     }
 *     productTags(first: 20) {
 *       nodes {
 *         id
 *         slug
 *         name
 *       }
 *     }
 *     attributes {
 *       nodes {
 *         id
 *         attributeId
 *         ... on LocalProductAttribute {
 *           name
 *           options
 *           variation
 *         }
 *         ... on GlobalProductAttribute {
 *           name
 *           options
 *           variation
 *         }
 *       }
 *     }
 *     ... on SimpleProduct {
 *       onSale
 *       stockStatus
 *       price
 *       rawPrice: price(format: RAW)
 *       regularPrice
 *       salePrice
 *       stockStatus
 *       stockQuantity
 *       soldIndividually
 *     }
 *     ... on VariableProduct {
 *       onSale
 *       price
 *       rawPrice: price(format: RAW)
 *       regularPrice
 *       salePrice
 *       stockStatus
 *       stockQuantity
 *       soldIndividually
 *       variations(first: 50) {
 *         nodes {
 *           id
 *           databaseId
 *           name
 *           price
 *           rawPrice: price(format: RAW)
 *           regularPrice
 *           salePrice
 *           onSale
 *           attributes {
 *             nodes {
 *               name
 *               label
 *               value
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }`;
 *     return await fetchAPI(query, databaseId);
 * }
 */

