// le param init : c'est les options de mon fetch : header, method(get, post..

import { Product } from "./types";

// does this let me vary the calling of it ? TResponse can be Product, User..
export const fetchFakeStore = async <TResponse>(uri: string, init?: RequestInit) : Promise<TResponse> => {
    const response = await fetch(`https://fakestoreapi.com/${uri}`, init);
    const data = await response.json();

    return data as TResponse
}

export const fetchRatingWithDelay = async (id : number | string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const product = await fetchFakeStore<Product>(`products/${id}`)
  
  return product.rating
}