import {Suspense} from "react";
import Loading from "../loading";
import Products from "../components/Products/Products";

// declare types for the functional component props //

export default async function page () {

    return(

        <div>
            <Suspense fallback={<Loading />}>
                <Products />
            </Suspense>
        </div>

    );
}
