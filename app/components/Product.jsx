import Link from "next/link";
import {Suspense} from "react";
import Loading from "../loading";
import Image from "next/image";

const Product = (products) => {
    return(
        <>
            {products.map((post) => (

                <div key={post.node.uri} className="card">
                    <Suspense fallback={<Loading />}>
                        <Link href={`/product/${post.node.databaseId}`}>
                            <h3>{post.node.name}</h3>

                            <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                                <Image
                                    src={post.node.image.sourceUrl ?? null}
                                    alt={post.node.image.title}
                                    fill
                                    className="absolute rounded-md h-full w-full object-cover"
                                />
                            </div>
                            <p className="italic"
                               dangerouslySetInnerHTML={{
                                   __html: post.node.shortDescription.slice(0, 200) + "...",
                               }}
                            />
                        </Link>



                    </Suspense>
                </div>
            ))}
        </>

    );
}
export default Product;