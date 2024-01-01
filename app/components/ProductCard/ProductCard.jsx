import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../../loading";

import defaultImage from "../default.jpg";

const ProductCard = ({product}) => {

    return (
        <div className="w-full h-[420px] group rounded-md">
        <div className="card h-3/4 overflow-hidden">
            <Image
                src={product.image?.sourceUrl ?? defaultImage}
                alt={product.image?.altText}
                className="group-hover:scale-110 duration-300"
                fill
            />
        </div>

        <div className="w-full h-1/4 flex flex-col gap-3 mt-3">
            <span className="inline-flex items-baseline">
                <h3 className="text-lg font-medium text-gray-100 group-hover:text-textDesignColor duration-200">
                    {product.name}
                </h3>
                <p className="text-sm gap-2" dangerouslySetInnerHTML={{
                    __html: product.price
                }}
                />
            </span>

            <div className="flex justify-between items-center text-sm text-gray-200">

                <span className="w-10 h-[1px] bg-gray-200 inline-flex">
                    <p className="flex items-center gap-2">
                        {product.slug}
                    </p>
                    <p className="line bg-red-200 flex items-center gap-2 text-center" dangerouslySetInnerHTML={{
                        __html: product.regularPrice
                    }}
                    />
                </span>

                <Link href={`/product/${product.id}`} className="post-content my-4">
                    <p className="flex items-center gap-2"
                       dangerouslySetInnerHTML={{
                           __html: product.shortDescription.slice(0, 200) + "...",
                       }}
                    />
                </Link>
                <button data-id={product.databaseId} className="text-base border-[1px] border-zinc-600 px-2 py-[1px] italic hover:border-textDesignColor duration-300">
                    Checkout {product.databaseId}
                </button>
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