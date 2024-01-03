import { Suspense} from "react";
import Loading from "../../loading";
import { OneProduct } from "../../libs/service";
import {notFound} from "next/navigation";



export default async function ProductDetailed ({params}) {

    const product = await OneProduct(params.databaseId);

    if ( ! product ) {
        notFound()
    }

    return (

        <div>
            <main>
                <div className="my-4">
                    <h3 className="text-xl text-center">{product.name}</h3>
                </div>
                <Suspense fallback={<Loading />}>
                    <div className="card" key={product.uri}>
                        <p dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                </Suspense>
            </main>


        </div>
    );

}

/**
 * <div className="single-product">
 *                 <h1>{product.name}</h1>
 *                 <div dangerouslySetInnerHTML={{ __html: product.description }} />
 *                 <p>
 *                     {product.onSale && <del>{product.regularPrice}</del>}
 *                     {product.price}
 *                 </p>
 *
 *                 <div className="attributes">
 *                     {product.attributes.nodes.map((attr) => (
 *                         <div key={attr.id}>
 *                             <strong>{attr.name}:</strong> {attr.options.join(', ')}
 *                         </div>
 *                     ))}
 *                 </div>
 *
 *             </div>
 */
