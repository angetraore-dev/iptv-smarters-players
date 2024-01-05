//api/hello/[id]/hello.js
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const id = params.id;
    const {searchParans } = request.nextUrl;
    const sort = searchParans.get('sort');
    return NextResponse.json({message: "angetraore-devs", id});
}