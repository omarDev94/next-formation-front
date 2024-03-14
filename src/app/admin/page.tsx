// "use client"

import { useEffect, useState } from "react"
import Product from "../components/product/Product"
import { fetchFakeStore } from "../lib/fakeStoreApiService"

const listStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

export default async function Admin() {

    const products = await fetchFakeStore<Products>("products");

    return (
        <>
            <h1>Admin Page</h1>
            <ul style={listStyle}>
                {products && products.map(product =>
                    <Product key={product.id} product={product} />
                )}
            </ul>;
        </>
      );
      
}