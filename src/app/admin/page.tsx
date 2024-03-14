// "use client"
import { CSSProperties } from "react";
import { fetchFakeStore } from "../lib/fakeStoreApiService"
import { Products } from "../lib/types";
import Link from "next/link";

const listStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

export default async function Admin() {

    const products = await fetchFakeStore<Products>("products");

    return (
        <>
            <h1>Admin Page</h1>
            <ul style={listStyle}>
                {products && products.map(product =>
                    <li key={product.id}>
                        <Link href={`/admin/${product.id}`}>{product.title}</Link>
                    </li>
                )}
            </ul>;
        </>
      );
      
}