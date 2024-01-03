import { Suspense} from "react";
import Loading from "../../loading";
import { OneProduct } from "../../libs/service";
import {notFound} from "next/navigation";
import defaultImage from "../../components/default.jpg";

export default async function ProductDetailed ({params}) {

    const product = await OneProduct(params.databaseId);

    if ( ! product ) {
        notFound()
    }

    return (

        <div>
            <main>
                <div className="my-4">
                    <h3 className="text-xl text-base text-center">{product.name }
                        <p className="line" dangerouslySetInnerHTML={{ __html: product.regularPrice }} />
                    </h3>
                </div>
                <div className="flex flex-col items-center">
                    <button className="bg-green-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">checkout for <p className="text-base italic" dangerouslySetInnerHTML={{ __html: product.price }}/> </button>
                    {/*text-base border-[1px] border-zinc-600 px-2 py-[1px] italic hover:border-textDesignColor duration-300*/}
                </div>
                <Suspense fallback={<Loading />}>
                    <div className="card" key={product.uri}>
                        <p className="text-xl text-black" dangerouslySetInnerHTML={{ __html: product.shortDescription }} />
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

/**
 *             <section className="container mx-auto py-12">
 *                 <div
 *                     className="post-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
 *                     style={{
 *                         backgroundImage: `url(${product.image.sourceUrl})`,
 *                         backgroundSize: "cover",
 *                         backgroundPosition: "center",
 *                     }}
 *                 >
 *                     <div
 *                         className="absolute w-full h-full z-10"
 *                         style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
 *                     ></div>
 *                     <div className="z-20 text-center">
 *                         <h1 className="text-2xl md:text-4xl mb-4">{product.slug}</h1>
 *                         <p className="italic">By angetraore-dev</p>
 *                     </div>
 *                 </div>
 *                 <div
 *                     className="post-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
 *                     dangerouslySetInnerHTML={{ __html: product.description }}
 *                 ></div>
 *             </section>
 */
