import handler from "../../app/api/get-products";

const page = () => {
    const result = handler(GET);
    console.log(result);
    return{handler}
}
export default page;