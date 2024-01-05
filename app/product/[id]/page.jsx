import { Suspense} from "react";
import Loading from "../../loading";
import { singleProduct } from "../../libs/service";
import {notFound} from "next/navigation";
import handler from "../../api/get-products";

export default async function ProductDetailed ({params}) {

    const product = await singleProduct(params.id);


    const short_description ={__html: product.short_description };
    const description ={__html: product.description };
    const price = {__html: product.price };
    const regular_price = {__html: product.regular_price };
    //price_html have the two prices
    const price_html = {__html: product.price_html };
    const sale_price = {__html: product.sale_price };


    console.log("==product now", product.id);

    if ( ! product ) {
        notFound()
    }

    return (

        <>
                <div className="my-4">
                    <h3 className="text-xl text-base text-center">{product.name }</h3>
                </div>
                <div className="flex flex-col items-center">

                    <button className="bg-green-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">checkout </button>
                </div>


        </>
    );

}

/**
 *         <div>
 *             <main>
 *                 <div className="my-4">
 *                     <h3 className="text-xl text-base text-center">{product.name }
 *                     </h3>
 *                     <div className="w-full text-sm text-slate-900 line-through" dangerouslySetInnerHTML={{
 *                         __html: product.regular_price,
 *                     }} />
 *
 *                 </div>
 *                 <div className="flex flex-col items-center">
 *                     <div className="text-3xl font-bold text-slate-900" dangerouslySetInnerHTML={{
 *                         __html: product.price_html,
 *                     }}/>
 *                     <button className="bg-green-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">checkout </button>
 *                 </div>
 *
 *                 <div className="card" key={product.slug}>
 *                     <div className="text-3xl font-bold text-slate-900 text-black" dangerouslySetInnerHTML={{
 *                         __html: product.short_description ?? product.description,
 *                     }} />
 *                 </div>
 *             </main>
 *
 *
 *         </div>
 */