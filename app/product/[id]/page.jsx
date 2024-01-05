//'use-client';
import Image from "next/image";
import { retrieveProductById } from "../../utils/wooCommerceApi";
import {notFound} from "next/navigation";

export default async function ProductDetailed ({params}) {

    const product = await retrieveProductById(params.id);


    const short_description ={__html: product.short_description.slice(0,300)+ "...", };
    const description ={__html: product.description.slice(0,300)+ "...", };
    const price = {__html: product.price };
    const regular_price = {__html: product.regular_price };
    //price_html have the two prices
    const price_html = {__html: product.price_html };
    const sale_price = {__html: product.sale_price };


    console.log("==single product==", product);

    if ( ! product ) {
        notFound()
    }

    return (

        <>
            <section className="w-screen">

                <div
                    className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-white-600 shadow-md">
                    <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
                        <div className="relative p-8 md:w-4/6">
                            <div className="flex flex-col md:flex-row">
                                <h2 className="mb-2 text-2xl font-black">{product.name}</h2>
                                <span className="ml-2 text-xs uppercase line">{regular_price}</span>
                            </div>
                            <p className="mt-3 font-sans text-base tracking-normal">{description}.</p>
                            <div className="flex flex-col md:flex-row md:items-end">
                                <p className="mt-6 text-4xl font-black" >{price_html}<sup
                                    className="align-super text-sm">00</sup></p>
                                <span className="ml-2 text-xs uppercase">258 Sales</span>
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row">
                                <button
                                    className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                    </svg>
                                    Buy now
                                </button>
                                <button
                                    className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">Preview
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
                            <Image className="block h-auto max-w-full rounded-md shadow-lg"
                                 src={product.images[0].src} alt={product.images[0].alt} fill />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

}

/**
 * <div class="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
 *   <div class="relative flex h-full flex-col text-gray-600 md:flex-row">
 *     <div class="relative p-8 md:w-4/6">
 *       <div class="flex flex-col md:flex-row">
 *         <h2 class="mb-2 text-2xl font-black">Tailby</h2>
 *         <span class="ml-2 text-xs uppercase">Tailwind</span>
 *       </div>
 *       <p class="mt-3 font-sans text-base tracking-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p>
 *       <div class="flex flex-col md:flex-row md:items-end">
 *         <p class="mt-6 text-4xl font-black">$70<sup class="align-super text-sm">00</sup></p>
 *         <span class="ml-2 text-xs uppercase">258 Sales</span>
 *       </div>
 *       <div class="mt-8 flex flex-col sm:flex-row">
 *         <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
 *           <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
 *             <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
 *           </svg>
 *           Buy now
 *         </button>
 *         <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">Preview</button>
 *       </div>
 *     </div>
 *     <div class="mx-auto flex items-center px-5 pt-1 md:p-8">
 *       <img class="block h-auto max-w-full rounded-md shadow-lg" src="/images/4PQXlbagb4MqcadNmeo0D.png" alt="Shop image" />
 *     </div>
 *   </div>
 * </div>
 */

/**
 *  <div className="my-4">
 *                     <h3 className="text-xl text-base text-center">{product.name }</h3>
 *                 </div>
 *                 <div className="flex flex-col items-center">
 *
 *                     <button className="bg-green-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">checkout </button>
 *                 </div>
 *             <main>
 *                 <div className="my-4">
 *                     <h3 className="text-xl text-base text-center">{product.name }
 *                     </h3>
 *                     <div className="w-full text-sm text-slate-900 line-through" dangerouslySetInnerHTML={regular_price} />
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
 */