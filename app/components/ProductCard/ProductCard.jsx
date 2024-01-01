import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../../loading";

import defaultImage from "../default.jpg";

export default function ProductCard ({product}) {

    return (

        <div className="post-block p-2 rounded-md">
            <div className="card">
                <h3 className="text-2xl py-4 text-center">{product.name}
                    <p className="" dangerouslySetInnerHTML={{
                        __html: product.price
                    }}
                    />
                </h3>

                <p className="line bg-red-700 text-white text-center" dangerouslySetInnerHTML={{
                    __html: product.regularPrice
                }}
                />

            </div>
            <Link href={`/product/${product.databaseId}`}>
                <div className="card relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                    <Image
                        src={product.image?.sourceUrl ?? defaultImage}
                        fill
                        alt={product.image?.altText}
                        className="absolute p-4 rounded-md h-full w-full object-cover"
                    />
                </div>
            </Link>
            <Link href={`/product/${product.id}`} className="post-content my-4">
                <div className="card">
                    <h3 className="text-2xl py-4 text-center">{product.slug}</h3>
                    <p className="italic"
                       dangerouslySetInnerHTML={{
                           __html: product.shortDescription.slice(0, 200) + "...",
                       }}
                    />
                </div>
            </Link>
        </div>
    );
}