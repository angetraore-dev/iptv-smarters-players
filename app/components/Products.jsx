import { Suspense } from "react";
import Loading from "../loading";
import { notFound } from "next/navigation";
import { getWooProducts } from "../libs/service";
import ProductCard from "./ProductCard/ProductCard";

const  Products = async () => {

    const products = await getWooProducts();
    if ( ! products ){
        notFound();
    }

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <h3 className="text-xl text-center">All Products on Sale ({products.length})</h3>
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-12">
                    {products.map((product) => {
                        return <ProductCard key={product.node.id} product={product.node} />;
                    })}
                </div>
            </Suspense>
        </div>


    );

}
export default Products;
