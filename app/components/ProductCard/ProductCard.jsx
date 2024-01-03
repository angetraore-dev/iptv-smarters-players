import Link from "next/link";
import Image from "next/image";
import defaultImage from "../default.jpg";

//import {Suspense} from "react";
//import Loading from "../../loading";

const ProductCard = ({product}) => {

    return (

        <div className="w-full h-[320px] group rounded-md">
        {/*Image and hidden content*/}
            <div className="rounded-lg bg-blue-200 h-3/4  overflow-hidden">
            <Link href={`/product/${product.databaseId}`} className="relative block w-full h-3/4 bg-white-900 text-bodyColor group">
                <Image
                    src={product.image?.sourceUrl ?? defaultImage}
                    alt={product.image?.altText}
                    className="mx-auto py-4 rounded-lg group-hover:scale-110 duration-300 group-hover:opacity-50"
                    fill
                />

                <div className="relative p-5">
                    <div className="mt-2">
                        {/* Hidden content */}
                        <div
                            className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                        >
                            <div className="p-2">
                                <p className="flex items-center gap-2 text-bodyColor"
                                   dangerouslySetInnerHTML={{
                                       __html: product.shortDescription.slice(0, 200) + "...",
                                   }}
                                />
                                <button
                                    className="px-4 py-2 text-sm text-bodyColor bg-white"
                                    type="button"
                                >
                                    add to cart
                                </button>
                            </div>

                        </div>
                        {/* End of hidden content */}
                    </div>
                </div>
            </Link>
        </div>
        {/*End image and hidden content*/}
        <div className="w-full h-1/4 flex flex-col gap-3 mt-3">
            <div className="inline-flex items-baseline">
                <h3 className="text-lg font-medium text-gray-100 group-hover:text-textDesignColor duration-200">
                    {product.name}
                </h3>
                <p className="line text-sm gap-2" dangerouslySetInnerHTML={{
                    __html: product.regularPrice
                }}
                />
            </div>

            <div className="flex justify-between items-center text-sm text-gray-200">

                <span className="w-10 h-[1px] bg-gray-200 inline-flex">
                    <p className="flex items-center gap-2 mr-2">
                        {product.slug}
                    </p>
                    <p className="flex items-center gap-2 text-center" dangerouslySetInnerHTML={{
                        __html: product.price
                    }}
                    />
                </span>

                <Link href={`/product/${product.databaseId}`} className="post-content my-4">

                    <button className="text-base border-[1px] border-zinc-600 px-2 py-[1px] italic hover:border-textDesignColor duration-300">
                        Checkout
                    </button>
                </Link>

            </div>
        </div>
    </div>

    );
}
export default ProductCard;

/**
 * Good last
 *         <div className="post-block p-2 rounded-md">
 *             <div className="card">
 *                 <h3 className="text-2xl py-4 text-center">{product.name}
 *                     <p className="" dangerouslySetInnerHTML={{
 *                         __html: product.price
 *                     }}
 *                     />
 *                 </h3>
 *
 *                 <p className="line bg-red-700 text-white text-center" dangerouslySetInnerHTML={{
 *                     __html: product.regularPrice
 *                 }}
 *                 />
 *
 *             </div>
 *             <Link href={`/product/${product.databaseId}`}>
 *                 <div className="card relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
 *                     <Image
 *                         src={product.image?.sourceUrl ?? defaultImage}
 *                         fill
 *                         alt={product.image?.altText}
 *                         className="absolute p-4 rounded-md h-full w-full object-cover"
 *                     />
 *                 </div>
 *             </Link>
 *             <Link href={`/product/${product.id}`} className="post-content my-4">
 *                 <div className="card">
 *                     <h3 className="text-2xl py-4 text-center">{product.slug}</h3>
 *                     <p className="italic"
 *                        dangerouslySetInnerHTML={{
 *                            __html: product.shortDescription.slice(0, 200) + "...",
 *                        }}
 *                     />
 *                 </div>
 *             </Link>
 *         </div>
 */