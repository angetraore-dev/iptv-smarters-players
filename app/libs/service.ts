const API_URL = String(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
const headers = { "Content-Type": "application/json" };

/*Working fine Retrieve all woo products having onSale: True*/

export async function getWooProducts() {

    const { data } = await fetch(API_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            query: `query WooProducts($first: Int = 10, $last: Int, $after: String, $before: String) {
                products(
                    first: $first
                last: $last
                after: $after
                before: $before
                where: {onSale: true}
            ) {
                    pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
                    }
                    edges {
                        cursor
                        node {
                            id
                            slug
                            name
                            sku
                            type
                            databaseId
                            description
                            shortDescription
                            image {
                                id
                                sourceUrl
                                altText
                            }
                        ... on SimpleProduct {
                                onSale
                                price
                                content
                                regularPrice
                            }
                        ... on VariableProduct {
                                onSale
                                price
                                content
                                regularPrice
                            }
                        }
                    }
                }
            }`,
        }),
        next: { revalidate: 10},

    }).then((res) => res.json());

    return data?.products?.edges;

}
export async function getOneProduct($id){
    const { data } = await fetch(API_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            query: `query getoneProduct() {
              product(id: $id, idType: DATABASE_ID) {
                name
                id
                databaseId
                date
                related {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }`,

        }),
        next : { revalidate: 10}
    }).then((res) => res.json());

    return data;
}

/**
 * function getWooProducts() {
 *
 *     const query = `
 *   {
 *     products(first: 100 where:{onSale: true}) {
 *       nodes {
 *         id
 *         name
 *         description
 *         shortDescription
 *         purchasable
 *         sku
 *         onSale
 *         image {
 *           sourceUrl
 *           title
 *           status
 *           uri
 *           link
 *         }
 *         slug
 *       }
 *     }
 *   }
 *     `;
 *
 *     const res = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`,
 *         {
 *             method: "GET",
 *             headers,
 *             next: {
 *                 revalidate: 0,
 *             },
 *         }
 *     );
 *
 *     const { data } = await res.json();
 *
 *     return data?.products?.nodes;
 *
 * }
 */

/**
 * export async function WooProductslist($first = 10, $last ){
 *     const { data } = await fetch(API_URL, {
 *         method: "POST",
 *         headers: headers,
 *         body: JSON.stringify({
 *             query: `query WooProducts(first: $first, $last: Int, $after: String, $before: String where:{onSale: true}) {
 *           products(
 *             first: $first
 *             last: $last
 *             after: $after
 *             before: $before
 *             where: {onSale: true}
 *           ) {
 *             pageInfo {
 *               endCursor
 *               hasNextPage
 *               hasPreviousPage
 *               startCursor
 *             }
 *             edges {
 *               cursor
 *               node {
 *                 id
 *                 slug
 *                 name
 *                 type
 *                 databaseId
 *                 shortDescription
 *                 description
 *                 sku
 *                 image {
 *                   id
 *                   sourceUrl
 *                   altText
 *                   uri
 *                 }
 *                 ... on SimpleProduct {
 *                   onSale
 *                   price
 *                   content
 *                   regularPrice
 *                 }
 *                 ... on VariableProduct {
 *                   onSale
 *                   price
 *                   content
 *                   regularPrice
 *                 }
 *               }
 *             }
 *           }
 *
 *         }`,
 *         }),
 *         next: { revalidate: 10},
 *     }).then((res) => res.json());
 *
 *     return  data?.products?.edges;
 *
 * }
 */

/**
 * query GetAllProducts($first: Int, $last: Int, $after: String, $before: String) {
 * products(first: $first, last: $last, after: $after, before: $before where:{onSale: true}) {
 *     pageInfo {
 *       endCursor
 *       hasNextPage
 *       hasPreviousPage
 *       startCursor
 *     }
 *     edges {
 *       cursor
 *       node {
 *         id
 *         slug
 *         name
 *         type
 *         databaseId
 *         shortDescription
 *         description
 *         image {
 *           id
 *           sourceUrl
 *           altText
 *         }
 *         ... on SimpleProduct {
 *           onSale
 *           price
 *           content
 *           regularPrice
 *         }
 *         ... on VariableProduct {
 *           onSale
 *           price
 *           content
 *           regularPrice
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * query FetchProducts($first: Int = 10) {
 *   products(first: $first, where: {onSale: true}) {
 *     nodes {
 *       id
 *       name
 *       description(format: RENDERED)
 *       purchasable
 *       sku
 *       slug
 *       onSale
 *       shortDescription(format: RENDERED)
 *       ... on VariableProduct {
 *         id
 *         name
 *         attributes {
 *           nodes {
 *             id
 *             variation
 *             name
 *           }
 *         }
 *       }
 *       image {
 *         link
 *         slug
 *       }
 *     }
 *   }
 * }
 */