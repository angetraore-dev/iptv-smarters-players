import { Suspense } from "react";
import Loading from "../../loading";
import { notFound } from "next/navigation";
import { fetchWooCommerceProducts } from "../../utils/service";
import { ProductBox }  from "../ProductCard/ProductBox";


export default async function Products(){

    const products = await fetchWooCommerceProducts();
    if ( ! products ){
        notFound();
    }

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <h3 className="text-xl text-center">All Products on Sale ({products.length})</h3>
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-12">
                    {products.map((product) => {

                        return <ProductBox key={product.id} product={product} />;
                    })}
                </div>
            </Suspense>
        </div>


    );

}